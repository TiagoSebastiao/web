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
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(30).optional().default(""),
  message: z.string().trim().min(5).max(3000),
  locale: z.string().max(5).optional(),
  /** Campo-armadilha: as pessoas não o veem, os bots preenchem-no. */
  website: z.string().max(0).optional(),
})

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]!)

export async function POST(request: Request) {
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
