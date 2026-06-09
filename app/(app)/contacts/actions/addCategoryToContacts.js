'use server'

import { addCategoryToContacts } from '@/lib/contacts/addCategoryToContacts'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function addCategoryToContactsAction(contactIds, categoryId) {
  const m = await currentMembership()

  if (!m) return { error: 'Not allowed' }

  return addCategoryToContacts(m.organizationId, contactIds, categoryId)
}
