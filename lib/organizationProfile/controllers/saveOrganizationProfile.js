import { OrganizationProfile } from '../models'

// Create or update an organization's invoice profile.
export async function saveOrganizationProfile(organizationId, data) {
  const row = await OrganizationProfile.findOne({
    where: { organization_id: organizationId }
  })

  if (row) {
    await row.update(data)

    return row.toJSON()
  }

  const created = await OrganizationProfile.create({
    organization_id: organizationId,
    ...data
  })

  return created.toJSON()
}
