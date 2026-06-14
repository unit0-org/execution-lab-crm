'use server'

import { listMeetings } from '@/lib/meeting/controllers/listMeetings'
import { withMember } from '@/lib/auth/withMember'

export const listMeetingsAction = withMember(
  () => listMeetings(),
  []
)
