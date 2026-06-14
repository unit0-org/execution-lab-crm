'use server'

import { listEvents } from '@/lib/event/controllers/listEvents'
import { withMember } from '@/lib/auth/withMember'

export const listEventsAction = withMember(
  () => listEvents(),
  []
)
