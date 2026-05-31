import { Contact } from '@/lib/db/models'

export async function deleteContact(id) {
  return Contact.destroy({ where: { id } })
}
