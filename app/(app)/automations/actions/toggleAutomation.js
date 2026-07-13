'use server'

import { withMember } from '@/lib/auth/withMember'
import { updateAutomation } from '@/lib/automation/controllers/updateAutomation'

export const toggleAutomationAction = withMember(async (id, isActive) => {
  await updateAutomation(id, { is_active: isActive })

  return { ok: true }
})
