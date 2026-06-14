'use server'

import { getEventDetail } from '@/lib/event/controllers/getEventDetail'
import { withMember } from '@/lib/auth/withMember'

export const getEventAction = withMember(
  (id) => getEventDetail(id),
  null
)
