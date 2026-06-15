import { Contact } from '@/lib/contact/models'

// Soft-delete several contacts (paranoid) so they can be restored.
export function deleteContacts(ids) {
  return Contact.destroy({ where: { id: ids } })
}
