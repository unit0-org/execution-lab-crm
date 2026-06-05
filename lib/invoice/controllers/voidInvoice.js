import { Invoice } from '../models'

// Void an invoice (e.g. issued in error).
export async function voidInvoice(invoiceId) {
  const invoice = await Invoice.findByPk(invoiceId)

  if (!invoice) return { error: 'Invoice not found' }

  await invoice.update({ status: 'void' })

  return invoice.toJSON()
}
