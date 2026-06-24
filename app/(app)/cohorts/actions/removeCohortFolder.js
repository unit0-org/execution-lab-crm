'use server'

import { revalidatePath } from 'next/cache'
import { withMember } from '@/lib/auth/withMember'
import { removeCohortFolder } from '@/lib/cohort/controllers'

export const removeCohortFolderAction = withMember(async (id, cohortId) => {
  const result = await removeCohortFolder(id)

  revalidatePath(`/cohorts/${cohortId}`)

  return result
})
