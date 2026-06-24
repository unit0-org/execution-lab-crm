'use server'

import { revalidatePath } from 'next/cache'
import { withMember } from '@/lib/auth/withMember'
import { addCohortResource } from '@/lib/cohort/controllers'

export const addCohortResourceAction = withMember(async (formData) => {
  const cohortId = formData.get('cohort_id')
  const result = await addCohortResource({
    folderId: formData.get('folder_id'),
    kind: formData.get('kind'),
    title: formData.get('title'),
    url: formData.get('url')
  })

  if (result.ok) revalidatePath(`/cohorts/${cohortId}`)

  return result
})
