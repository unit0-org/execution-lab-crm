import { Contact } from '@/lib/contact/models'

export function deleteContact(id) {
  return Contact.destroy({
    where: { id }
  })
}
