import { ensureEmailTemplates } from './ensureEmailTemplates'
import { renderTemplate } from './renderTemplate'

// The subject + plain-text body of a template with its vars filled in,
// without sending — for an editable preview before the email goes out.
export async function renderEmailMessage(key, vars) {
  const templates = await ensureEmailTemplates()
  const tpl = templates.find((t) => t.template_key === key)

  if (!tpl) return { subject: '', body: '' }

  return {
    subject: renderTemplate(tpl.subject, vars),
    body: renderTemplate(tpl.body, vars)
  }
}
