import { contactInOrg } from './contactInOrg'
import { buildContactFileKey } from '@/lib/storage/buildContactFileKey'
import { createContactFileUploadUrl }
  from '@/lib/storage/createContactFileUploadUrl'

// A signed URL the browser uploads the bytes to, plus the object key to save
// on the metadata row once the upload lands (via attachContactFile).
export async function requestContactFileUpload(contactId) {
  if (!await contactInOrg(contactId)) return { error: 'Unknown contact' }

  const bucketPath = buildContactFileKey(contactId)
  const upload = await createContactFileUploadUrl(bucketPath)

  return {
    ok: true,
    bucketPath,
    signedUrl: upload.signedUrl,
    token: upload.token
  }
}
