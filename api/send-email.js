import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, phone, message } = req.body ?? {}

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: 'Missing required fields.' })
  }

  const { data, error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL,
    to: [process.env.RESEND_TO_EMAIL],
    subject: `Nova sprava od farmara: ${name}`,
    reply_to: email,
    text: `Meno: ${name}\nEmail: ${email}\nTelefon: ${phone}\n\nSprava:\n${message}`,
  })

  if (error) {
    return res.status(502).json({ error: error.message })
  }

  return res.status(200).json({ ok: true, id: data.id })
}
