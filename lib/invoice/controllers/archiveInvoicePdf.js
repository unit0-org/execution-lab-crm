import { uploadInvoicePdf } from './uploadInvoicePdf'

// Best-effort, idempotent Drive archive of the invoice PDF. Skips the upload
// when the invoice is already filed (so approve-then-send doesn't duplicate),
// and a Drive failure degrades to "not archived" rather than aborting — the
// email carries the PDF as an attachment regardless.
export async function archiveInvoicePdf(invoice, pdf) {
  if (invoice.drive_file_id) {
    return { url: invoice.pdf_url, fileId: invoice.drive_file_id }
  }

  try {
    return await uploadInvoicePdf(invoice, pdf)
  } catch {
    return { url: null, fileId: null }
  }
}
