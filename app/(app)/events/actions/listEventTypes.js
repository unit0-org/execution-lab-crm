'use server'

import { eventTypeOptions } from '@/lib/event/controllers/eventTypeOptions'
import { withMember } from '@/lib/auth/withMember'

// Server action: the event types the events list can be filtered by.
export const listEventTypesAction = withMember(
  () => eventTypeOptions(), []
)
