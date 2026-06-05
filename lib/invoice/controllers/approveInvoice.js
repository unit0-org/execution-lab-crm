import { Invoice } from '../models'

// Mark a draft invoice approved so it can be sent to the client.
export async function approveInvoice(invoiceId) {
  const invoice = await Invoice.findByPk(invoiceId)

  if (!invoice) return { error: 'Invoice not found' }

  await invoice.update({ status: 'approved' })

  return invoice.toJSON()
}
