import { Contact } from '@/lib/contact/models'

// Soft-delete a contact (paranoid) so it can be restored.
export function deleteContact(id) {
  return Contact.destroy({ where: { id } })
}
