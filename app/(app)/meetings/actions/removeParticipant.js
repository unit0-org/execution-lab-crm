'use server'

import { removeParticipant } from '@/lib/meeting/controllers/removeParticipant'
import { withMember } from '@/lib/auth/withMember'

export const removeParticipantAction = withMember(
  (id) => removeParticipant(id)
)
