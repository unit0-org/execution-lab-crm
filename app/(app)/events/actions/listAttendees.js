'use server'

import { listAttendees } from '@/lib/event/controllers/listAttendees'
import { getEventDetail } from '@/lib/event/controllers/getEventDetail'
import { withMember } from '@/lib/auth/withMember'

export const listAttendeesAction = withMember(
  async (id) => {
    const event = await getEventDetail(id)

    if (!event) return []

    return listAttendees(id)
  },
  []
)
