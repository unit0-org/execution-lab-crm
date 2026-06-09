'use server'

import { listAttendees } from '@/lib/event/controllers/listAttendees'
import { getEventDetail } from '@/lib/event/controllers/getEventDetail'
import { withOrg } from '@/lib/auth/withOrg'

export const listAttendeesAction = withOrg(
  async (organizationId, id) => {
    const event = await getEventDetail(organizationId, id)

    if (!event) return []

    return listAttendees(id)
  },
  []
)
