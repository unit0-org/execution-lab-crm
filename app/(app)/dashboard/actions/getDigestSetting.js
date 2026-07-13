'use server'

import { withOrg } from '@/lib/auth/withOrg'
import { getDigestSetting } from '@/lib/digest/controllers/getDigestSetting'

export const getDigestSettingAction = withOrg(
  (organizationId) => getDigestSetting(organizationId),
  null
)
