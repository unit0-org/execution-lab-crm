import { ensureInvoiceSetting } from './ensureInvoiceSetting'
import { uploadToDrive } from '@/lib/drive/uploadToDrive'

// Store the invoice PDF in the Drive folder, when configured (a folder id
// plus the Google service-account key in the environment).
export async function uploadInvoicePdf(invoice, pdf) {
  const org = invoice.organization_id
  const setting = await ensureInvoiceSetting(org)
  const folderId = setting.drive_folder_id
  const creds = process.env.GOOGLE_SERVICE_ACCOUNT_JSON

  if (!folderId || !creds) return { url: null, fileId: null }

  return uploadToDrive(folderId, `${invoice.number}.pdf`, pdf, creds)
}
