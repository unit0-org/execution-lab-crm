'use server'

import { getMeetingDetail } from '@/lib/meeting/controllers/getMeetingDetail'
import { withMember } from '@/lib/auth/withMember'

export const getMeetingAction = withMember(
  (id) => getMeetingDetail(id),
  null
)
