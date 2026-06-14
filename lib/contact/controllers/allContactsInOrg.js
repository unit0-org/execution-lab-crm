import { Contact } from '@/lib/contact/models'

// True when every given contact id belongs to the organization.
export async function allContactsInOrg(organizationId, ids) {
  const count = await Contact.count({
    where: { id: ids, organization_id: organizationId }
  })

  return count === new Set(ids).size
}
