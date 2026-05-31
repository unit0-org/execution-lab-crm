import { Contact } from '@/lib/db/models'

export async function updateContact(id, fields) {
  await Contact.update(fields, { where: { id } })

  return { ok: true }
}
