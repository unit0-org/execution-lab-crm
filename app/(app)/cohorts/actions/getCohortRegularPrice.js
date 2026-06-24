'use server'

import { withMember } from '@/lib/auth/withMember'
import { cohortRegularPriceCents } from '@/lib/cohort/controllers'

export const getCohortRegularPriceAction = withMember(
  (cohortId) => cohortRegularPriceCents(cohortId),
  null
)
