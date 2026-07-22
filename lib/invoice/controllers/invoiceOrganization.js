import { getOrganizationProfile }
  from '@/lib/organizationProfile/controllers/getOrganizationProfile'

// The seller profile for an org, or a safe default if none is set.
export async function invoiceOrganization(organizationId) {
  const profile = await getOrganizationProfile(organizationId)

  return profile || { legal_name: 'Your Organization' }
}
