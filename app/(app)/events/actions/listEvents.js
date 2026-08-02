'use server'

import { listEvents } from '@/lib/event/controllers/listEvents'
import { withMember } from '@/lib/auth/withMember'

// Server action: the events list, optionally filtered by period and type.
export const listEventsAction = withMember(
  (filter) => listEvents(filter),
  []
)
