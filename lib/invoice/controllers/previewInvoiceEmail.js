import { invoiceMessage } from './invoiceMessage'
import { invoiceSendError } from './invoiceSendError'

// An editable draft of the email an invoice would send, or the reason
// it can't be sent yet.
export async function previewInvoiceEmail(invoice) {
  const base = { id: invoice.id, number: invoice.number }
  const error = invoiceSendError(invoice)

  if (error) return { ...base, error }

  const message = await invoiceMessage(invoice, invoice.pdf_url)

  return { ...base, ...message }
}
