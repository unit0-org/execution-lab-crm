'use server'

import { withMember } from '@/lib/auth/withMember'
import { deleteAutomation } from '@/lib/automation/controllers/deleteAutomation'

export const deleteAutomationAction = withMember(async (id) => {
  await deleteAutomation(id)

  return { ok: true }
})
