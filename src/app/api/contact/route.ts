
import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, message } = body

    console.log('Request body:', body)
    console.log('Using API key:', process.env.RESEND_API_KEY ? '✅ present' : '❌ missing')

    const { data, error } = await resend.emails.send({
      from: 'Go-Girl Painting <contact@go-girlpainting.com>',
      to: 'go-girlpainting@outlook.com',
      subject: `New Inquiry from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 1rem;">
          <h2 style="color: #e28797;">🎨 New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    })

    console.log('Resend response:', data)
    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Caught error:', err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

