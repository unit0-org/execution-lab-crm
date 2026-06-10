'use server'

import { withOrg } from '@/lib/auth/withOrg'
import { listCohortRegistrations } from '@/lib/registration/controllers'

export const listCohortRegistrationsAction = withOrg(
  (organizationId, cohortId) =>
    listCohortRegistrations(organizationId, cohortId),
  []
)
