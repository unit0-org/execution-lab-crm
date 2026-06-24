'use server'

import { revalidatePath } from 'next/cache'
import { withMember } from '@/lib/auth/withMember'
import { addCohortResource } from '@/lib/cohort/controllers'

export const addCohortResourceAction = withMember(async (formData) => {
  const cohortId = formData.get('cohort_id')
  const result = await addCohortResource({
    cohortId,
    kind: formData.get('kind'),
    title: formData.get('title'),
    url: formData.get('url'),
    sessionLabel: formData.get('session_label')
  })

  if (result.ok) revalidatePath(`/cohorts/${cohortId}`)

  return result
})
