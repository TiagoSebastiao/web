import { NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

export const runtime = "nodejs"

/*
 * Variáveis de ambiente (configurar na Vercel):
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
 * 1. Origem: só aceita pedidos feitos a partir do próprio site (www, pré-visualizações
 *    da Vercel deste projeto e localhost em desenvolvimento).
 * 2. Limite por IP: no máximo RATE_LIMIT envios válidos em cada RATE_WINDOW_MS. A contagem fica
 *    na memória da instância (simples e sem custos); com várias instâncias em paralelo é
 *    aproximada, mas trava os abusos repetidos, que é o que interessa.
 */
const RATE_LIMIT = 5
const RATE_WINDOW_MS = 60 * 60 * 1000
const hits = new Map<string, number[]>()

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
      (hostname.startsWith("oten-") && hostname.endsWith("-tiagosebastiaos-projects.vercel.app"))
    )
  } catch {
    return false
  }
}

function isRateLimited(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown"
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
    return NextResponse.json({ error: "forbidden" }, { status: 403 })
  }
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "invalid" }, { status: 400 })
  }

  // Bot apanhado no campo-armadilha: responde "ok" sem enviar nada.
  if (body && typeof body === "object" && "website" in body && (body as { website?: string }).website) {
    return NextResponse.json({ ok: true })
  }

  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid" }, { status: 400 })
  }

  // Só conta os pedidos válidos (os que enviariam mesmo um e-mail).
  if (isRateLimited(request)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429, headers: { "Retry-After": "3600" } })
  }

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) {
    console.error("CONTACT_API: faltam as variáveis RESEND_API_KEY e/ou CONTACT_TO_EMAIL.")
    return NextResponse.json({ error: "unavailable" }, { status: 500 })
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
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("CONTACT_API_ERROR:", error)
    return NextResponse.json({ error: "send_failed" }, { status: 500 })
  }
}
