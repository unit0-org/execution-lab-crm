'use server'

import { withMember } from '@/lib/auth/withMember'
import { listCohortResources } from '@/lib/cohort/controllers'

export const listCohortResourcesAction = withMember(
  (cohortId) => listCohortResources(cohortId),
  []
)
