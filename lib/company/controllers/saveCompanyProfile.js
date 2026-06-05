import { CompanyProfile } from '../models'

// Create or update an organization's invoice company profile.
export async function saveCompanyProfile(organizationId, data) {
  const row = await CompanyProfile.findOne({
    where: { organization_id: organizationId }
  })

  if (row) {
    await row.update(data)

    return row.toJSON()
  }

  const created = await CompanyProfile.create({
    organization_id: organizationId,
    ...data
  })

  return created.toJSON()
}
