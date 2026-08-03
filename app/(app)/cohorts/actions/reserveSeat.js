'use server'

import { withMember } from '@/lib/auth/withMember'
import { reserveSeat } from '@/lib/registration/controllers'

export const reserveSeatAction = withMember(
  (draft) => reserveSeat(draft),
  { error: 'You are not signed in.' }
)
