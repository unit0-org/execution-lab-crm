'use server'

import { withAdmin } from '@/lib/auth/withAdmin'
import { updateAutomation } from '@/lib/automation/controllers/updateAutomation'

export const toggleAutomationAction = withAdmin(
  async (organizationId, id, isActive) => {
    await updateAutomation(id, { is_active: isActive })

    return { ok: true }
  }
)
