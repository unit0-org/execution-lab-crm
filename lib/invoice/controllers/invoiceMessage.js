import { renderTemplate } from '@/lib/email/controllers/renderTemplate'
import { invoiceTemplate } from './invoiceTemplate'
import { invoiceEmailVars } from './invoiceEmailVars'
import { invoiceCc } from './invoiceCc'

// The default, editable email for an invoice: recipient, cc, subject,
// and a plain-text body rendered from the org's template.
export async function invoiceMessage(invoice, url) {
  const tpl = await invoiceTemplate(invoice.organization_id)
  const vars = await invoiceEmailVars(invoice, url)

  return {
    to: invoice.bill_to_email || '',
    cc: invoiceCc(),
    subject: renderTemplate(tpl.subject, vars),
    body: renderTemplate(tpl.body, vars)
  }
}
