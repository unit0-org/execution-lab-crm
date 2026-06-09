'use server'

import { listCategories } from '@/lib/contacts/listCategories'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function listCategoriesAction() {
  const m = await currentMembership()

  if (!m) return []

  return listCategories(m.organizationId)
}
