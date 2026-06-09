'use server'

import { deleteCategory } from '@/lib/contacts/deleteCategory'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function deleteCategoryAction(id) {
  const m = await currentMembership()

  if (!m) return { error: 'Not allowed' }

  return deleteCategory(m.organizationId, id)
}
