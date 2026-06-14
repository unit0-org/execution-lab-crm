'use server'

import { withMember } from '@/lib/auth/withMember'
import { getCohort } from '@/lib/cohort/controllers'

export const getCohortAction = withMember(
  (id) => getCohort(id),
  null
)
