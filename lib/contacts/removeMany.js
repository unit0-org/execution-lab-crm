import { Contact } from '@/lib/db/models'

export async function deleteContacts(ids) {
  return Contact.destroy({ where: { id: ids } })
}
