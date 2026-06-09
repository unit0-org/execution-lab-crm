'use server'

import { getMeetingDetail } from '@/lib/meeting/controllers/getMeetingDetail'
import { withOrg } from '@/lib/auth/withOrg'

export const getMeetingAction = withOrg(
  (organizationId, id) => getMeetingDetail(organizationId, id),
  null
)
