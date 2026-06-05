import { Invoice } from '../models'
import { assignInvoiceNumber } from './assignInvoiceNumber'
import { addInvoiceLine } from './addInvoiceLine'
import { getInvoice } from './getInvoice'

// Create a draft invoice for an org, with an optional first line item.
export async function createInvoice(organizationId, data) {
  const number = await assignInvoiceNumber(organizationId)
  const invoice = await Invoice.create({
    organization_id: organizationId,
    number,
    contact_id: data.contactId || null,
    bill_to_name: data.billToName || null,
    bill_to_email: data.billToEmail || null,
    bill_to_address: data.billToAddress || null,
    notes: data.notes || null,
    currency: data.currency || 'cad',
    due_at: data.dueAt || null,
    issued_at: new Date()
  })

  if (data.line) await addInvoiceLine(invoice.id, data.line)

  return getInvoice(invoice.id)
}
