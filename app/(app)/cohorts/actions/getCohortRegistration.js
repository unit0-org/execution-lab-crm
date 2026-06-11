'use server'

import { withOrg } from '@/lib/auth/withOrg'
import { getCohortRegistration } from '@/lib/registration/controllers'

export const getCohortRegistrationAction = withOrg(
  (organizationId, cohortId, id) =>
    getCohortRegistration(organizationId, cohortId, id),
  null
)
