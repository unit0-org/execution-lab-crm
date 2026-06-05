import { Resend } from 'resend'

// Send one email through Resend using the org's API key. Our only
// entry point to Resend — feature code never imports it directly.
export async function sendEmail(apiKey, message) {
  const resend = new Resend(apiKey)
  const { error } = await resend.emails.send(message)

  if (error) throw new Error(error.message || 'email send failed')

  return { ok: true }
}
