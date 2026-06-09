'use server'

import { deleteEvent } from '@/lib/event/controllers/deleteEvent'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function deleteEventAction(id) {
  const m = await currentMembership()

  if (!m) return { error: 'Not allowed' }

  return deleteEvent(m.organizationId, id)
}
