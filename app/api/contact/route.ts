import { Resend } from "resend"
import { NextResponse } from "next/server"

export const runtime = "nodejs"

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json()

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios." },
        { status: 400 }
      )
    }

    const resendApiKey = process.env.RESEND_API_KEY
    const contactToEmail = process.env.CONTACT_TO_EMAIL

    if (!resendApiKey) {
      return NextResponse.json(
        { error: "RESEND_API_KEY não configurada." },
        { status: 500 }
      )
    }

    if (!contactToEmail) {
      return NextResponse.json(
        { error: "CONTACT_TO_EMAIL não configurado." },
        { status: 500 }
      )
    }

    const resend = new Resend(resendApiKey)

    const data = await resend.emails.send({
      from: "OTEN MOTORS <onboarding@resend.dev>",
      to: contactToEmail,
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