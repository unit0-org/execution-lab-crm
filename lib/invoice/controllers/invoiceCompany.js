import { getCompanyProfile } from '@/lib/company/controllers/getCompanyProfile'

// The seller profile for an org, or a safe default if none is set.
export async function invoiceCompany(organizationId) {
  const profile = await getCompanyProfile(organizationId)

  return profile || { legal_name: 'Your Company' }
}
