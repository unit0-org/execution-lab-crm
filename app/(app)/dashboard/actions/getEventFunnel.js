'use server'

import { eventFunnel } from '@/lib/dashboard/controllers/eventFunnel'
import { withMember } from '@/lib/auth/withMember'

// Server action: the events funnel for one period + type filter.
export const getEventFunnelAction = withMember(
  (filter) => eventFunnel(filter)
)
