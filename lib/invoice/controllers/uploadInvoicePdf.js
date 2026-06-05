import { ensureInvoiceSetting } from './ensureInvoiceSetting'
import { uploadToDrive } from '@/lib/drive/uploadToDrive'

// Store the invoice PDF in the org's Drive folder, when configured.
export async function uploadInvoicePdf(invoice, pdf) {
  const setting = await ensureInvoiceSetting(invoice.organization_id)
  const folderId = setting.drive_folder_id

  if (!folderId) return { url: null, fileId: null }

  return uploadToDrive(folderId, `${invoice.number}.pdf`, pdf)
}
