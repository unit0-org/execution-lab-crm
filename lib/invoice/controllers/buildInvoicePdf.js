import { getInvoice } from './getInvoice'
import { invoiceCompany } from './invoiceCompany'
import { renderInvoicePdf } from '@/lib/invoice/pdf/renderInvoicePdf'

// Produce the PDF bytes (Buffer) for an invoice.
export async function buildInvoicePdf(invoiceId) {
  const invoice = await getInvoice(invoiceId)
  const company = await invoiceCompany(invoice.organization_id)

  return renderInvoicePdf(invoice, company)
}
