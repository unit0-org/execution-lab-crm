'use server'

import { setContactCategories } from '@/lib/contacts/setContactCategories'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function setContactCategoriesAction(contactId, categoryIds) {
  const m = await currentMembership()

  if (!m) return { error: 'Not allowed' }

  return setContactCategories(m.organizationId, contactId, categoryIds)
}
