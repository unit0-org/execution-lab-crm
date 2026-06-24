'use server'

import { revalidatePath } from 'next/cache'
import { withMember } from '@/lib/auth/withMember'
import { removeCohortResource } from '@/lib/cohort/controllers'

export const removeCohortResourceAction = withMember(async (id, cohortId) => {
  const result = await removeCohortResource(id)

  revalidatePath(`/cohorts/${cohortId}`)

  return result
})
