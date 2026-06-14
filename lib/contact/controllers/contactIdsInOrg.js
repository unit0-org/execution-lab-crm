import { Contact } from '@/lib/contact/models'

// The subset of the given contact ids that belong to the organization.
export async function contactIdsInOrg(organizationId, contactIds) {
  const rows = await Contact.findAll({
    where: { id: contactIds, organization_id: organizationId },
    attributes: ['id']
  })

  return rows.map((row) => row.id)
}
