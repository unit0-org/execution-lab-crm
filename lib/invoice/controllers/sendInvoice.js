import { Invoice } from '../models'
import { deliverInvoice } from './deliverInvoice'
import { invoiceSendError } from './invoiceSendError'

// Send an approved invoice: render PDF, store it, email the client.
export async function sendInvoice(invoiceId) {
  const invoice = await Invoice.findByPk(invoiceId)

  if (!invoice) return { error: 'Invoice not found' }

  const error = invoiceSendError(invoice)

  if (error) return { error }

  return deliverInvoice(invoice)
}
