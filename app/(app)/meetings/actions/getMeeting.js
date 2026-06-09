'use server'

import { getMeetingDetail } from '@/lib/meeting/controllers/getMeetingDetail'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function getMeetingAction(id) {
  const m = await currentMembership()

  if (!m) return null

  return getMeetingDetail(m.organizationId, id)
}
