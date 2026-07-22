'use server'

import { withOrg } from '@/lib/auth/withOrg'
import { getOrganizationProfile }
  from '@/lib/organizationProfile/controllers/getOrganizationProfile'

export const getOrganizationProfileAction = withOrg(
  (organizationId) => getOrganizationProfile(organizationId),
  null
)
