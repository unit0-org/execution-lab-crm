'use server'

import { withAdmin } from '@/lib/auth/withAdmin'
import { createAutomation } from '@/lib/automation/controllers/createAutomation'
import { formToAutomation } from './formToAutomation'

export const createAutomationAction = withAdmin(
  async (organizationId, formData) => {
    try {
      await createAutomation(formToAutomation(formData))

      return { ok: true }
    } catch (e) {
      return { error: e.message }
    }
  }
)
