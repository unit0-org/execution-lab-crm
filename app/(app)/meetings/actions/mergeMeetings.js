'use server'

import { mergeMeetings } from '@/lib/meeting/controllers/mergeMeetings'
import { withMember } from '@/lib/auth/withMember'

export const mergeMeetingsAction = withMember(
  (winnerId, loserIds) => mergeMeetings(winnerId, loserIds)
)
