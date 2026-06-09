'use server'

import { listAttendees } from '@/lib/event/controllers/listAttendees'
import { getEventDetail } from '@/lib/event/controllers/getEventDetail'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function listAttendeesAction(id) {
  const m = await currentMembership()

  if (!m) return []

  const event = await getEventDetail(m.organizationId, id)

  if (!event) return []

  return listAttendees(id)
}
