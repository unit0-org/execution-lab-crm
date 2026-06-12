import { markInvoiceSent } from './markInvoiceSent'

// Mark many invoices as sent at once.
export function markInvoicesSent(ids) {
  return Promise.all(ids.map((id) => markInvoiceSent(id)))
}
