'use server'

import { mergeMeetings } from '@/lib/meeting/controllers/mergeMeetings'

export async function mergeMeetingsAction(winnerId, loserId) {
  await mergeMeetings(winnerId, loserId)

  return { ok: true }
}
