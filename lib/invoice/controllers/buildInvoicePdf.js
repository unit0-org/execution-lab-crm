import { getInvoice } from './getInvoice'
import { invoiceOrganization } from './invoiceOrganization'
import { renderInvoicePdf } from '@/lib/invoice/pdf/renderInvoicePdf'

// Produce the PDF bytes (Buffer) for an invoice.
export async function buildInvoicePdf(invoiceId) {
  const invoice = await getInvoice(invoiceId)
  const seller = await invoiceOrganization(invoice.organization_id)

  return renderInvoicePdf(invoice, seller)
}
