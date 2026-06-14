import { Contact } from '@/lib/contact/models'

export function deleteContacts(ids) {
  return Contact.destroy({
    where: { id: ids }
  })
}
