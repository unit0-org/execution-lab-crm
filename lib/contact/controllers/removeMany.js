import { Contact } from '@/lib/contact/models'

export function deleteContacts(organizationId, ids) {
  return Contact.destroy({
    where: { id: ids, organization_id: organizationId }
  })
}
