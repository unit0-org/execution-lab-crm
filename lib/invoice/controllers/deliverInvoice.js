import { buildInvoicePdf } from './buildInvoicePdf'
import { uploadInvoicePdf } from './uploadInvoicePdf'
import { emailInvoice } from './emailInvoice'

// Render the PDF, store it on Drive, email it, and record delivery.
// Pass edit to override the recipient/subject/body for this send.
export async function deliverInvoice(invoice, edit) {
  const pdf = await buildInvoicePdf(invoice.id)
  const stored = await uploadInvoicePdf(invoice, pdf)

  await emailInvoice(invoice, pdf, stored.url, edit)
  await invoice.update({
    status: invoice.status === 'paid' ? 'paid' : 'sent',
    sent_at: new Date(),
    pdf_url: stored.url || invoice.pdf_url,
    drive_file_id: stored.fileId || invoice.drive_file_id
  })

  return invoice.toJSON()
}
