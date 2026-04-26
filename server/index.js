import express from 'express'
import { Resend } from 'resend'

const app = express()
const port = Number(process.env.PORT || 3001)

const resend = new Resend(process.env.RESEND_API_KEY)

app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

app.post('/api/send-email', async (req, res) => {
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
})

app.listen(port, () => {
  console.log(`Mail server running on http://localhost:${port}`)
})
