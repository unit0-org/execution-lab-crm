import { Contact } from '@/lib/contact/models'

export function deleteContact(organizationId, id) {
  return Contact.destroy({
    where: { id, organization_id: organizationId }
  })
}
