'use server'

import { mergeMeetings } from '@/lib/meeting/controllers/mergeMeetings'
import { withMember } from '@/lib/auth/withMember'

export const mergeMeetingsAction = withMember(
  async (winnerId, loserId) => {
    const result = await mergeMeetings(winnerId, loserId)

    if (result?.error) return result

    return { ok: true }
  }
)
