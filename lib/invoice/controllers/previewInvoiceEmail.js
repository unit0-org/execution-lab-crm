import { renderTemplate } from '@/lib/email/controllers/renderTemplate'
import { invoiceTemplate } from './invoiceTemplate'
import { invoiceEmailVars } from './invoiceEmailVars'
import { invoiceSendError } from './invoiceSendError'
import { invoiceCc } from './invoiceCc'

// A read-only preview of the email an invoice would send.
export async function previewInvoiceEmail(invoice) {
  const base = { id: invoice.id, number: invoice.number }
  const error = invoiceSendError(invoice)

  if (error) return { ...base, error }

  const tpl = await invoiceTemplate(invoice.organization_id)
  const vars = await invoiceEmailVars(invoice, invoice.pdf_url)

  return {
    ...base,
    to: invoice.bill_to_email,
    cc: invoiceCc(),
    subject: renderTemplate(tpl.subject, vars),
    body: renderTemplate(tpl.body, vars)
  }
}
