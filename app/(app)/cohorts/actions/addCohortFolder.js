'use server'

import { revalidatePath } from 'next/cache'
import { withMember } from '@/lib/auth/withMember'
import { addCohortFolder } from '@/lib/cohort/controllers'

export const addCohortFolderAction = withMember(async (formData) => {
  const cohortId = formData.get('cohort_id')
  const result = await addCohortFolder({ cohortId, name: formData.get('name') })

  if (result.ok) revalidatePath(`/cohorts/${cohortId}`)

  return result
})
