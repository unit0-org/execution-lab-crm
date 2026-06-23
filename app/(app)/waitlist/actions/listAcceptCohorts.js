'use server'

import { withMember } from '@/lib/auth/withMember'
import { listOpenCohortSeats } from '@/lib/cohort/controllers'

export const listAcceptCohortsAction = withMember(
  () => listOpenCohortSeats(),
  []
)
