import { Contact } from '@/lib/contact/models'

export async function updateContact(id, fields) {
  await Contact.update(fields, {
    where: { id }
  })

  return { ok: true }
}
