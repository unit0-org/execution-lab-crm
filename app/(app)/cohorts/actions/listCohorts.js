'use server'

import { withMember } from '@/lib/auth/withMember'
import { listCohortsWithStats } from '@/lib/cohort/controllers'

export const listCohortsAction = withMember(
  () => listCohortsWithStats(),
  []
)
