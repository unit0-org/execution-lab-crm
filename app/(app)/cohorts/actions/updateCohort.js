'use server'

import { withOrg } from '@/lib/auth/withOrg'
import { updateCohort } from '@/lib/cohort/controllers'
import { formToCohort } from './formToCohort'
import { assertCohortData } from './assertCohortData'

export const updateCohortAction = withOrg(
  async (organizationId, id, formData) => {
    try {
      const data = assertCohortData(formToCohort(formData))

      return await updateCohort(organizationId, id, data)
    } catch (e) {
      return { error: e.message }
    }
  }
)
