import { renderTemplate } from '@/lib/email/controllers/renderTemplate'
import { textToHtml } from '@/lib/email/controllers/textToHtml'
import { invoiceTemplate } from './invoiceTemplate'
import { invoiceEmailVars } from './invoiceEmailVars'
import { invoiceFromLine } from './invoiceFromLine'
import { invoiceCc } from './invoiceCc'

const attachment = (invoice, pdf) => ({
  filename: `${invoice.number}.pdf`,
  content: pdf.toString('base64')
})

// Shape the Resend payload from the org's editable invoice template,
// with the rendered PDF attached.
export async function invoiceEmail(org, invoice, setting, pdf, url, to) {
  const tpl = await invoiceTemplate(org)
  const vars = await invoiceEmailVars(invoice, url)

  return {
    from: invoiceFromLine(setting),
    to,
    cc: invoiceCc(),
    subject: renderTemplate(tpl.subject, vars),
    html: textToHtml(renderTemplate(tpl.body, vars)),
    attachments: [attachment(invoice, pdf)]
  }
}
