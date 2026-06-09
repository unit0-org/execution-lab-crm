'use server'

import { mergeMeetings } from '@/lib/meeting/controllers/mergeMeetings'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function mergeMeetingsAction(winnerId, loserId) {
  const m = await currentMembership()

  if (!m) return { error: 'Not allowed' }

  const result = await mergeMeetings(m.organizationId, winnerId, loserId)

  if (result?.error) return result

  return { ok: true }
}
