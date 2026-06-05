import { Invoice } from '../models'
import { deliverInvoice } from './deliverInvoice'

// Send an approved invoice: render PDF, store it, email the client.
export async function sendInvoice(invoiceId) {
  const invoice = await Invoice.findByPk(invoiceId)

  if (!invoice) return { error: 'Invoice not found' }

  if (invoice.status === 'draft')
    return { error: 'Approve the invoice before sending' }

  return deliverInvoice(invoice)
}
