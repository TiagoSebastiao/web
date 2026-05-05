import { Resend } from "resend"
import { NextResponse } from "next/server"

export const runtime = "nodejs"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json()

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios." },
        { status: 400 }
      )
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "RESEND_API_KEY não configurada." },
        { status: 500 }
      )
    }

    const data = await resend.emails.send({
      from: "OTEN MOTORS <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL || "teu-email@exemplo.com",
      replyTo: email,
      subject: `Novo contacto pelo website - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2>Novo pedido de contacto - OTEN MOTORS</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${phone}</p>
          <p><strong>Mensagem:</strong></p>
          <p>${message}</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("CONTACT_API_ERROR:", error)

    return NextResponse.json(
      { error: "Erro ao enviar mensagem." },
      { status: 500 }
    )
  }
}