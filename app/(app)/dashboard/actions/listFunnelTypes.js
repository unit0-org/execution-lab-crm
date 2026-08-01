'use server'

import { funnelTypeOptions }
  from '@/lib/dashboard/controllers/funnelTypeOptions'
import { withMember } from '@/lib/auth/withMember'

// Server action: the event types the funnel can be filtered by.
export const listFunnelTypesAction = withMember(
  () => funnelTypeOptions(), []
)
