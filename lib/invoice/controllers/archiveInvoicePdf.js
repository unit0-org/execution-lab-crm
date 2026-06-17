import { uploadInvoicePdf } from './uploadInvoicePdf'

// Best-effort Drive archive of the invoice PDF. Storing the copy must never
// block sending the email (the email carries the PDF as an attachment), so a
// Drive failure degrades to "not archived" instead of aborting the send.
export async function archiveInvoicePdf(invoice, pdf) {
  try {
    return await uploadInvoicePdf(invoice, pdf)
  } catch {
    return { url: null, fileId: null }
  }
}
