import { sendEmail } from '../sendEmail'
import { resendApiKey } from './resendApiKey'
import { ensureEmailTemplate } from './ensureEmailTemplate'
import { renderTemplate } from './renderTemplate'
import { textToHtml } from './textToHtml'
import { fromLine } from './fromLine'

// Render and send one template. Never throws on a missing API key
// or recipient — returns { skipped } so callers (the webhook) stay safe.
export async function sendTemplatedEmail(key, to, vars) {
  const tpl = await ensureEmailTemplate(key)
  const apiKey = resendApiKey()

  if (!apiKey || !to || !tpl) return { skipped: true }

  const message = {
    from: fromLine(),
    to,
    subject: renderTemplate(tpl.subject, vars),
    html: textToHtml(renderTemplate(tpl.body, vars))
  }

  return sendEmail(apiKey, message)
}
