'use server'

import { scopedEventIds } from '@/lib/event/controllers/scopedEventIds'
import { withMember } from '@/lib/auth/withMember'

export const scopedEventIdsAction = withMember(
  (criteria) => scopedEventIds(criteria),
  []
)
