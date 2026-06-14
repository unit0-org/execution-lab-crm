'use server'

import { withMember } from '@/lib/auth/withMember'
import { setCohortStatus } from '@/lib/cohort/controllers'

export const setCohortStatusAction = withMember(
  async (id, status) =>
    setCohortStatus(id, status)
)
