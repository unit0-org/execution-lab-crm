import { createInvoiceAction } from '../actions/createInvoice'
import { updateInvoiceAction } from '../actions/updateInvoice'

// Create or update an invoice depending on the editor mode.
export function saveInvoice(mode, id, payload) {
  if (mode === 'edit') return updateInvoiceAction(id, payload)

  return createInvoiceAction(payload)
}
