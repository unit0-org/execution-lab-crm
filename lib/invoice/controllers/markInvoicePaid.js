import { Invoice } from '../models'

// Mark an invoice as paid.
export async function markInvoicePaid(invoiceId) {
  const invoice = await Invoice.findByPk(invoiceId)

  if (!invoice) return { error: 'Invoice not found' }

  await invoice.markPaid()

  return invoice.toJSON()
}
