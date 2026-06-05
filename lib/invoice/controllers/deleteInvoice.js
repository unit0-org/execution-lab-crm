import { Invoice } from '../models'

// Permanently delete an invoice and its line items (cascade).
export async function deleteInvoice(invoiceId) {
  const invoice = await Invoice.findByPk(invoiceId)

  if (!invoice) return { error: 'Invoice not found' }

  await invoice.destroy()

  return { ok: true }
}
