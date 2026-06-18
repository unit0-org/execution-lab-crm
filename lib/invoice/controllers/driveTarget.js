import { ensureInvoiceSetting } from './ensureInvoiceSetting'

// The Drive folder + service-account creds for an invoice's org, or an
// { error } explaining what's missing — so the modal can show why an upload
// can't run rather than failing silently.
export async function driveTarget(invoice) {
  const setting = await ensureInvoiceSetting(invoice.organization_id)
  const folderId = setting.drive_folder_id
  const creds = process.env.GOOGLE_SERVICE_ACCOUNT_JSON

  if (!folderId) return { error: 'No Drive folder set in invoice settings' }

  if (!creds) return { error: 'No Google service-account key configured' }

  return { folderId, creds }
}
