'use server'

import { listEventOptions } from '@/lib/event/controllers/listEventOptions'
import { withMember } from '@/lib/auth/withMember'

export const listEventOptionsAction = withMember(
  () => listEventOptions(),
  []
)
