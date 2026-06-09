'use server'

import { setCategoryColor } from '@/lib/contacts/setCategoryColor'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function setCategoryColorAction(id, color) {
  const m = await currentMembership()

  if (!m) return { error: 'Not allowed' }

  return setCategoryColor(m.organizationId, id, color)
}
