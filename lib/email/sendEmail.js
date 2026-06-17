import { Resend } from 'resend'
import { withAlwaysCc } from './withAlwaysCc'

// Send one email through Resend using the org's API key. Our only
// entry point to Resend — feature code never imports it directly, so the
// always-CC (abel@theexecutionlab.ca) is applied here for every email.
export async function sendEmail(apiKey, message) {
  const resend = new Resend(apiKey)
  const { error } = await resend.emails.send(withAlwaysCc(message))

  if (error) throw new Error(error.message || 'email send failed')

  return { ok: true }
}
