import { sendEmail } from '../sendEmail'
import { resendApiKey } from './resendApiKey'
import { textToHtml } from './textToHtml'
import { fromLine } from './fromLine'

// Send an already-composed (preview-edited) plain-text email. Returns
// { skipped } when there's no API key or recipient, so callers stay safe.
export function sendComposedEmail({ to, subject, body }) {
  const apiKey = resendApiKey()

  if (!apiKey || !to) return { skipped: true }

  return sendEmail(apiKey, {
    from: fromLine(),
    to,
    subject,
    html: textToHtml(body)
  })
}
