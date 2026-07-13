'use server'

import { withMember } from '@/lib/auth/withMember'
import { createAutomation } from '@/lib/automation/controllers/createAutomation'
import { formToAutomation } from './formToAutomation'

export const createAutomationAction = withMember(async (formData) => {
  try {
    await createAutomation(formToAutomation(formData))

    return { ok: true }
  } catch (e) {
    return { error: e.message }
  }
})
