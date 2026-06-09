'use server'

import { listEvents } from '@/lib/event/controllers/listEvents'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function listEventsAction() {
  const m = await currentMembership()

  if (!m) return []

  return listEvents(m.organizationId)
}
