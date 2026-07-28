'use server'

import { withMember } from '@/lib/auth/withMember'
import { deleteCohort } from '@/lib/cohort/controllers'

export const deleteCohortAction = withMember(
  (id) => deleteCohort(id)
)
