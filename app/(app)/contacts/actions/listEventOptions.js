'use server'

import { withMember } from '@/lib/auth/withMember'
import { listEventOptions } from '@/lib/event/controllers/listEventOptions'

export const listEventOptionsAction = withMember(
  () => listEventOptions(),
  []
)
