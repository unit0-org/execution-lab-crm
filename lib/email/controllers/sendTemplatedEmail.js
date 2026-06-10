import { sendEmail } from '../sendEmail'
import { getOrgSecret } from '@/lib/org/controllers/getOrgSecret'
import { ensureEmailTemplates } from './ensureEmailTemplates'
import { renderTemplate } from './renderTemplate'
import { fromLine } from './fromLine'

// Render and send one org template. Never throws on a missing API key
// or recipient — returns { skipped } so callers (the webhook) stay safe.
export async function sendTemplatedEmail(organizationId, key, to, vars) {
  const templates = await ensureEmailTemplates(organizationId)
  const tpl = templates.find((t) => t.template_key === key)
  const apiKey = await getOrgSecret(organizationId, 'resend_api_key')

  if (!apiKey || !to || !tpl) return { skipped: true }

  const message = {
    from: fromLine(),
    to,
    subject: renderTemplate(tpl.subject, vars),
    html: renderTemplate(tpl.body, vars)
  }

  return sendEmail(apiKey, message)
}
