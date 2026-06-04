import { OrganizationUser } from '../models'

// All members of an organization, for the admin settings page.
export async function listMembers(organizationId) {
  const rows = await OrganizationUser.findAll({
    where: { organization_id: organizationId },
    order: [['created_at', 'ASC']]
  })

  return rows.map((row) => row.toJSON())
}
