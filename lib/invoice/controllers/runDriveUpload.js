import { buildInvoicePdf } from './buildInvoicePdf'
import { uploadToDrive } from '@/lib/drive/uploadToDrive'

// Render the invoice PDF and upload it to Drive, recording the result on the
// invoice. Returns a detailed ok/error result (the real Drive error message
// on failure) for the diagnostics modal.
export async function runDriveUpload(invoice, target) {
  try {
    const pdf = await buildInvoicePdf(invoice.id)
    const name = `${invoice.number}.pdf`
    const stored =
      await uploadToDrive(target.folderId, name, pdf, target.creds)

    await invoice.update({ pdf_url: stored.url, drive_file_id: stored.fileId })

    return { ok: true, url: stored.url, fileId: stored.fileId }
  } catch (e) {
    return { ok: false, error: e.message || 'Drive upload failed' }
  }
}
