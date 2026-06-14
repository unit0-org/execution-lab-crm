'use server'

import { withMember } from '@/lib/auth/withMember'
import { createCohort } from '@/lib/cohort/controllers'
import { formToCohort } from './formToCohort'
import { assertCohortData } from './assertCohortData'
import { assertPromoCode } from './assertPromoCode'

export const createCohortAction = withMember(
  async (formData) => {
    try {
      const data = await assertPromoCode(
        assertCohortData(formToCohort(formData))
      )

      return await createCohort(data)
    } catch (e) {
      return { error: e.message }
    }
  }
)
