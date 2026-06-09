'use server'

import { removeCategoryFromContacts }
  from '@/lib/contacts/removeCategoryFromContacts'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function removeCategoryFromContactsAction(contactIds, categoryId) {
  const m = await currentMembership()

  if (!m) return { error: 'Not allowed' }

  return removeCategoryFromContacts(m.organizationId, contactIds, categoryId)
}
