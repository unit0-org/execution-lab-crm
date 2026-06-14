'use server'

import { withMember } from '@/lib/auth/withMember'
import { listCohortRegistrations } from '@/lib/registration/controllers'

export const listCohortRegistrationsAction = withMember(
  (cohortId) =>
    listCohortRegistrations(cohortId),
  []
)
