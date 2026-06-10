'use server'

import { withOrg } from '@/lib/auth/withOrg'
import { createCohort } from '@/lib/cohort/controllers'
import { formToCohort } from './formToCohort'
import { assertCohortData } from './assertCohortData'
import { assertPromoCode } from './assertPromoCode'

export const createCohortAction = withOrg(
  async (organizationId, formData) => {
    try {
      const data = await assertPromoCode(
        assertCohortData(formToCohort(formData))
      )

      return await createCohort(organizationId, data)
    } catch (e) {
      return { error: e.message }
    }
  }
)
