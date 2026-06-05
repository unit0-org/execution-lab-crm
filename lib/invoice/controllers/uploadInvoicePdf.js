import { ensureInvoiceSetting } from './ensureInvoiceSetting'
import { getOrgSecret } from '@/lib/org/controllers/getOrgSecret'
import { uploadToDrive } from '@/lib/drive/uploadToDrive'

// Store the invoice PDF in the org's Drive folder, when configured (a
// folder id plus the org's Google service-account key).
export async function uploadInvoicePdf(invoice, pdf) {
  const org = invoice.organization_id
  const setting = await ensureInvoiceSetting(org)
  const folderId = setting.drive_folder_id
  const creds = await getOrgSecret(org, 'google_service_account_json')

  if (!folderId || !creds) return { url: null, fileId: null }

  return uploadToDrive(folderId, `${invoice.number}.pdf`, pdf, creds)
}
