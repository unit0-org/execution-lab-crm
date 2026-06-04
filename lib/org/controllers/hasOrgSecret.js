import { OrganizationSecret } from '../models'

// Whether an organization has a given integration secret configured.
export async function hasOrgSecret(organizationId, kind) {
  const count = await OrganizationSecret.count({
    where: { organization_id: organizationId, kind }
  })

  return count > 0
}
