'use server'

import { withMember } from '@/lib/auth/withMember'
import { updateCohort } from '@/lib/cohort/controllers'
import { formToCohort } from './formToCohort'
import { assertCohortData } from './assertCohortData'
import { assertPromoCode } from './assertPromoCode'

export const updateCohortAction = withMember(
  async (id, formData) => {
    try {
      const data = await assertPromoCode(
        assertCohortData(formToCohort(formData))
      )

      return await updateCohort(id, data)
    } catch (e) {
      return { error: e.message }
    }
  }
)
