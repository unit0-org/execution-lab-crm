'use server'

import { createCategory } from '@/lib/contacts/createCategory'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function createCategoryAction(name, color) {
  const m = await currentMembership()

  if (!m) return { error: 'Not allowed' }

  return createCategory(m.organizationId, name, color)
}
