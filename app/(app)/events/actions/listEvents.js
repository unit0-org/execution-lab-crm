'use server'

import { listEvents } from '@/lib/event/controllers/listEvents'
import { withOrg } from '@/lib/auth/withOrg'

export const listEventsAction = withOrg(
  (organizationId) => listEvents(organizationId),
  []
)
