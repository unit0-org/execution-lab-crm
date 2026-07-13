'use server'

import { withAdmin } from '@/lib/auth/withAdmin'
import { deleteAutomation } from '@/lib/automation/controllers/deleteAutomation'

export const deleteAutomationAction = withAdmin(
  async (organizationId, id) => {
    await deleteAutomation(id)

    return { ok: true }
  }
)
