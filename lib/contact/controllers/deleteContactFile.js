import { ContactFile } from '@/lib/contact/models'
import { removeContactFileObject }
  from '@/lib/storage/removeContactFileObject'

// Delete a contact attachment: drop the stored object, then its metadata
// row. No-op if the row is already gone.
export async function deleteContactFile(id) {
  const row = await ContactFile.findByPk(id)

  if (!row) return { ok: true }

  await removeContactFileObject(row.bucket_path)
  await row.destroy()

  return { ok: true }
}
