'use server'

import { getEventDetail } from '@/lib/event/controllers/getEventDetail'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function getEventAction(id) {
  const m = await currentMembership()

  if (!m) return null

  return getEventDetail(m.organizationId, id)
}
