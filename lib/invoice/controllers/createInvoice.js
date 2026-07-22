import { Invoice } from '../models'
import { assignInvoiceNumber } from './assignInvoiceNumber'
import { replaceInvoiceLines } from './replaceInvoiceLines'
import { getInvoice } from './getInvoice'

// Create a draft invoice for an org with its line items and totals.
export async function createInvoice(organizationId, data) {
  const number = data.number || (await assignInvoiceNumber(organizationId))
  const invoice = await Invoice.create({
    organization_id: organizationId,
    number,
    contact_id: data.contactId || null,
    company_id: data.companyId || null,
    bill_to_name: data.billToName || null,
    bill_to_email: data.billToEmail || null,
    bill_to_address: data.billToAddress || null,
    currency: data.currency || 'cad',
    tax_rate: data.taxRate || 0,
    issued_at: data.issuedAt || null,
    due_at: data.dueAt || null
  })

  await replaceInvoiceLines(invoice.id, data.lines || [])

  return getInvoice(invoice.id)
}
