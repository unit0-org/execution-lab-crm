'use server'

import { getEventDetail } from '@/lib/event/controllers/getEventDetail'
import { withOrg } from '@/lib/auth/withOrg'

export const getEventAction = withOrg(
  (organizationId, id) => getEventDetail(organizationId, id),
  null
)
