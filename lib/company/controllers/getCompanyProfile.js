import { CompanyProfile } from '../models'

// An organization's invoice company profile, or null if unset.
export async function getCompanyProfile(organizationId) {
  const row = await CompanyProfile.findOne({
    where: { organization_id: organizationId }
  })

  return row ? row.toJSON() : null
}
