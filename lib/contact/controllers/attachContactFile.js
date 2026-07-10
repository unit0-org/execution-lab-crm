import { ContactFile } from '@/lib/contact/models'
import { contactInOrg } from './contactInOrg'

// Persist metadata for a file just uploaded to the bucket. Returns the new
// row as a plain object.
export async function attachContactFile(input) {
  const { contactId, bucketPath, fileName } = input

  if (!bucketPath || !fileName) return { error: 'A file is required' }

  if (!await contactInOrg(contactId)) return { ok: true }

  const row = await ContactFile.create({
    contact_id: contactId,
    bucket_path: bucketPath,
    file_name: fileName,
    mime_type: input.mimeType || null,
    size_bytes: input.sizeBytes || null,
    uploaded_by: input.uploadedBy || null
  })

  return row.toJSON()
}
