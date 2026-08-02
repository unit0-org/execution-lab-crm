'use server'

import { listParticipants } from '@/lib/event/controllers/listParticipants'
import { withMember } from '@/lib/auth/withMember'

export const listParticipantsAction = withMember(
  (statuses, events) => listParticipants(statuses, events),
  []
)
