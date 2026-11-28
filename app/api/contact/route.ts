import { NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

export const runtime = "nodejs"

/*
 * Variáveis de ambiente — na Cloudflare: Workers → oten-motors → Settings → Variables and Secrets
 * (as três como "Secret"); em desenvolvimento: .env.local (next dev) ou .dev.vars (preview do Worker).
 * - RESEND_API_KEY      chave da conta Resend
 * - CONTACT_TO_EMAIL    caixa que recebe os pedidos (ex.: geral@otenmotors.com)
 * - CONTACT_FROM_EMAIL  remetente, ex.: "OTEN MOTORS <site@otenmotors.com>".
 *                       Requer o domínio verificado no Resend; sem isso usa o
 *                       remetente de testes, que só entrega ao dono da conta Resend.
 */

const schema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.email().trim().max(200),
  phone: z.string().trim().max(30).optional().default(""),
  message: z.string().trim().min(5).max(3000),
  locale: z.string().max(5).optional(),
  /** Campo-armadilha: as pessoas não o veem, os bots preenchem-no. */
  website: z.string().max(0).optional(),
})

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]!)

/*
 * Proteção contra abuso do formulário (spam, encher a caixa do geral@ ou gastar a
 * quota do Resend):
 * 1. Origem: só aceita pedidos feitos a partir do próprio site (www, endereços *.workers.dev
 *    deste Worker, incluindo pré-visualizações, e localhost em desenvolvimento).
 * 2. Limite por IP: no máximo RATE_LIMIT envios válidos em cada RATE_WINDOW_MS. A contagem fica
 *    na memória do Worker (simples e sem custos); a Cloudflare corre várias cópias em paralelo,
 *    por isso é aproximada. A proteção principal é a regra de limite de pedidos da Cloudflare
 *    (WAF → Rate limiting rules, incluída no plano grátis; ver docs/DEPLOYMENT.md).
 */
const RATE_LIMIT = 5
const RATE_WINDOW_MS = 60 * 60 * 1000
const hits = new Map<string, number[]>()

/** Nome do Worker na Cloudflare (wrangler.jsonc → "name"). */
const WORKER_NAME = "oten-motors"
const WORKERS_DEV_HOST = new RegExp(`^([a-z0-9-]+-)?${WORKER_NAME}\\.[a-z0-9-]+\\.workers\\.dev$`)

/** Respostas da API nunca ficam em cache (nem no browser nem na Cloudflare). */
const NO_STORE = { "Cache-Control": "no-store" }
const reply = (body: object, status = 200, headers: Record<string, string> = {}) =>
  NextResponse.json(body, { status, headers: { ...NO_STORE, ...headers } })

function isAllowedOrigin(request: Request) {
  const origin = request.headers.get("origin")
  if (!origin) return false
  try {
    const { hostname, protocol } = new URL(origin)
    if (hostname === "localhost" || hostname === "127.0.0.1") return true
    if (protocol !== "https:") return false
    return (
      hostname === "www.otenmotors.com" ||
      hostname === "otenmotors.com" ||
      // oten-motors.<conta>.workers.dev e pré-visualizações <versão>-oten-motors.<conta>.workers.dev
      WORKERS_DEV_HOST.test(hostname)
    )
  } catch {
    return false
  }
}

function isRateLimited(request: Request) {
  const ip =
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown"
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < RATE_WINDOW_MS)
  if (recent.length >= RATE_LIMIT) {
    hits.set(ip, recent)
    return true
  }
  recent.push(now)
  hits.set(ip, recent)
  // Limpeza ocasional para a memória não crescer.
  if (hits.size > 5000) for (const [key, times] of hits) if (times.every((time) => now - time >= RATE_WINDOW_MS)) hits.delete(key)
  return false
}

export async function POST(request: Request) {
  if (!isAllowedOrigin(request)) {
    return reply({ error: "forbidden" }, 403)
  }
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return reply({ error: "invalid" }, 400)
  }

  // Bot apanhado no campo-armadilha: responde "ok" sem enviar nada.
  if (body && typeof body === "object" && "website" in body && (body as { website?: string }).website) {
    return reply({ ok: true })
  }

  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    return reply({ error: "invalid" }, 400)
  }

  // Só conta os pedidos válidos (os que enviariam mesmo um e-mail).
  if (isRateLimited(request)) {
    return reply({ error: "rate_limited" }, 429, { "Retry-After": "3600" })
  }

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) {
    console.error("CONTACT_API: faltam as variáveis RESEND_API_KEY e/ou CONTACT_TO_EMAIL.")
    return reply({ error: "unavailable" }, 500)
  }

  const { name, email, phone, message, locale } = parsed.data
  const rows: [string, string][] = [
    ["Nome", name],
    ["E-mail", email],
    ["Telefone", phone || "—"],
    ["Idioma do site", locale || "pt"],
  ]

  try {
    const { error } = await new Resend(RESEND_API_KEY).emails.send({
      from: CONTACT_FROM_EMAIL || "OTEN MOTORS <onboarding@resend.dev>",
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `Novo contacto pelo site — ${name}`,
      text: `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nMensagem:\n${message}`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111">
          <h2>Novo pedido de contacto — OTEN MOTORS</h2>
          ${rows.map(([k, v]) => `<p><strong>${k}:</strong> ${escapeHtml(v)}</p>`).join("")}
          <p><strong>Mensagem:</strong></p>
          <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
        </div>`,
    })
    if (error) throw error
    return reply({ ok: true })
  } catch (error) {
    console.error("CONTACT_API_ERROR:", error)
    return reply({ error: "send_failed" }, 500)
  }
}
