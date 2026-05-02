import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json()

    if (!name || !email || !phone || !message) {
      return Response.json(
        { error: "Todos os campos são obrigatórios." },
        { status: 400 }
      )
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY não encontrada")
      return Response.json(
        { error: "RESEND_API_KEY não configurada." },
        { status: 500 }
      )
    }

    const result = await resend.emails.send({
      from: "OTEN MOTORS <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL || "geral@otenmotors.com",
      subject: `Novo contacto pelo website - ${name}`,
      replyTo: email,
      html: `
        <h2>Novo pedido de contacto - OTEN MOTORS</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    })

    console.log("RESEND RESULT:", result)

    if (result.error) {
      console.error("RESEND ERROR:", result.error)
      return Response.json(
        { error: result.error.message },
        { status: 500 }
      )
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error("CONTACT API ERROR:", error)

    return Response.json(
      { error: "Erro interno do servidor." },
      { status: 500 }
    )
  }
}