'use server'

import { deleteContacts } from '@/lib/contacts/removeMany'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function bulkDeleteContactsAction(ids) {
  const m = await currentMembership()

  if (!m) return { error: 'Not allowed' }

  return deleteContacts(m.organizationId, ids)
}
