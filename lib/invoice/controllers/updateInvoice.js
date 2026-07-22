import { Invoice } from '../models'
import { replaceInvoiceLines } from './replaceInvoiceLines'
import { getInvoice } from './getInvoice'

// Update an invoice's header fields and replace its line items.
export async function updateInvoice(invoiceId, data) {
  const invoice = await Invoice.findByPk(invoiceId)

  if (!invoice) return null

  await invoice.update({
    number: data.number || invoice.number,
    contact_id: data.contactId || null,
    company_id: data.companyId || null,
    bill_to_name: data.billToName || null,
    bill_to_email: data.billToEmail || null,
    bill_to_address: data.billToAddress || null,
    tax_rate: data.taxRate || 0,
    issued_at: data.issuedAt || null,
    due_at: data.dueAt || null
  })
  await replaceInvoiceLines(invoiceId, data.lines || [])

  return getInvoice(invoiceId)
}
