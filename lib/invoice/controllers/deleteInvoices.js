import { deleteInvoice } from './deleteInvoice'

// Delete many invoices, reusing each invoice's line cascade.
export function deleteInvoices(ids) {
  return Promise.all(ids.map((id) => deleteInvoice(id)))
}
