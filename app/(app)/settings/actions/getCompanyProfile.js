'use server'

import { withOrg } from '@/lib/auth/withOrg'
import { getCompanyProfile } from '@/lib/company/controllers/getCompanyProfile'

export const getCompanyProfileAction = withOrg(
  (organizationId) => getCompanyProfile(organizationId),
  null
)
