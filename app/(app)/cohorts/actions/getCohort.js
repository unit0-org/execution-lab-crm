'use server'

import { withOrg } from '@/lib/auth/withOrg'
import { getCohort } from '@/lib/cohort/controllers'

export const getCohortAction = withOrg(
  (organizationId, id) => getCohort(organizationId, id),
  null
)
