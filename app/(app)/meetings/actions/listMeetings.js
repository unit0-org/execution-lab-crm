'use server'

import { listMeetings } from '@/lib/meeting/controllers/listMeetings'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function listMeetingsAction() {
  const m = await currentMembership()

  if (!m) return []

  return listMeetings(m.organizationId)
}
