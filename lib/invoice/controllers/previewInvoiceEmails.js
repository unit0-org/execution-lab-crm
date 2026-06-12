import { Invoice } from '../models'
import { previewInvoiceEmail } from './previewInvoiceEmail'

// Email previews for a set of invoices.
export async function previewInvoiceEmails(ids) {
  const invoices = await Invoice.findAll({ where: { id: ids } })

  return Promise.all(invoices.map((i) => previewInvoiceEmail(i)))
}
