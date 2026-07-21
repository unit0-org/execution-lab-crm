import { OrganizationProfile } from '../models'

// An organization's invoice profile, or null if unset.
export async function getOrganizationProfile(organizationId) {
  const row = await OrganizationProfile.findOne({
    where: { organization_id: organizationId }
  })

  return row ? row.toJSON() : null
}
