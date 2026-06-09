'use server'

import { listMeetings } from '@/lib/meeting/controllers/listMeetings'
import { withOrg } from '@/lib/auth/withOrg'

export const listMeetingsAction = withOrg(
  (organizationId) => listMeetings(organizationId),
  []
)
