import { Contact } from '@/lib/db/models'

export function deleteContact(id) {
  return Contact.destroy({ where: { id } })
}
