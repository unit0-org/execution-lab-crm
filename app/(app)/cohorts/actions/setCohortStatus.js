'use server'

import { withOrg } from '@/lib/auth/withOrg'
import { setCohortStatus } from '@/lib/cohort/controllers'

export const setCohortStatusAction = withOrg(
  async (organizationId, id, status) =>
    setCohortStatus(organizationId, id, status)
)
