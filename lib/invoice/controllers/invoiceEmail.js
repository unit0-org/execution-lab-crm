import { ensureEmailTemplates }
  from '@/lib/email/controllers/ensureEmailTemplates'
import { renderTemplate } from '@/lib/email/controllers/renderTemplate'
import { textToHtml } from '@/lib/email/controllers/textToHtml'
import { invoiceEmailVars } from './invoiceEmailVars'
import { invoiceFromLine } from './invoiceFromLine'

const attachment = (invoice, pdf) => ({
  filename: `${invoice.number}.pdf`,
  content: pdf.toString('base64')
})

// Shape the Resend payload from the org's editable invoice template,
// with the rendered PDF attached.
export async function invoiceEmail(org, invoice, setting, pdf, url, to) {
  const templates = await ensureEmailTemplates(org)
  const tpl = templates.find((t) => t.template_key === 'invoice')
  const vars = await invoiceEmailVars(invoice, url)

  return {
    from: invoiceFromLine(setting),
    to,
    subject: renderTemplate(tpl.subject, vars),
    html: textToHtml(renderTemplate(tpl.body, vars)),
    attachments: [attachment(invoice, pdf)]
  }
}
