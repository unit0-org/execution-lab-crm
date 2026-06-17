import { Invoice } from '../models'
import { storeInvoicePdf } from './storeInvoicePdf'

// Approve an invoice and file its PDF on Drive (best-effort), so the
// approved copy is archived even before it's sent.
export async function approveInvoice(invoiceId) {
  const invoice = await Invoice.findByPk(invoiceId)

  if (!invoice) return { error: 'Invoice not found' }

  const stored = await storeInvoicePdf(invoice)

  await invoice.update({
    status: 'approved',
    pdf_url: stored.url || invoice.pdf_url,
    drive_file_id: stored.fileId || invoice.drive_file_id
  })

  return invoice.toJSON()
}
