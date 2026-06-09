'use server'

import { mergeMeetings } from '@/lib/meeting/controllers/mergeMeetings'
import { withOrg } from '@/lib/auth/withOrg'

export const mergeMeetingsAction = withOrg(
  async (organizationId, winnerId, loserId) => {
    const result = await mergeMeetings(organizationId, winnerId, loserId)

    if (result?.error) return result

    return { ok: true }
  }
)
