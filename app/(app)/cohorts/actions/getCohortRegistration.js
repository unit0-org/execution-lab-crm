'use server'

import { withMember } from '@/lib/auth/withMember'
import { getCohortRegistration } from '@/lib/registration/controllers'

export const getCohortRegistrationAction = withMember(
  (cohortId, id) =>
    getCohortRegistration(cohortId, id),
  null
)
