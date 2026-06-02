import { Contact } from '@/lib/db/models'

export function deleteContacts(ids) {
  return Contact.destroy({ where: { id: ids } })
}
