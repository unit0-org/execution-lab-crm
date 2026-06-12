import { Invoice } from '../models'

const sentStatus = (status) =>
  status === 'paid' || status === 'void' ? status : 'sent'

// Record that an invoice was sent (e.g. delivered outside the app).
export async function markInvoiceSent(invoiceId) {
  const invoice = await Invoice.findByPk(invoiceId)

  if (!invoice) return { error: 'Invoice not found' }

  await invoice.update({
    status: sentStatus(invoice.status), sent_at: new Date()
  })

  return invoice.toJSON()
}
