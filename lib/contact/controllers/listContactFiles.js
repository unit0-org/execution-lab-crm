import { ContactFile } from '@/lib/contact/models'
import { createContactFileDownloadUrls }
  from '@/lib/storage/createContactFileDownloadUrls'
import { toContactFile } from './toContactFile'

// A contact's attachments, newest first, each with a fresh short-lived signed
// download URL resolved in one batch call.
export async function listContactFiles(contactId) {
  const rows = await ContactFile.findAll({
    where: { contact_id: contactId },
    order: [['created_at', 'DESC']]
  })
  const urls = await createContactFileDownloadUrls(
    rows.map((row) => row.bucket_path)
  )

  return rows.map((row) => toContactFile(row.toJSON(), urls))
}
