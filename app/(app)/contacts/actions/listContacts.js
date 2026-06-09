'use server'

import { listFilteredContacts } from '@/lib/contacts/listFiltered'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function listContactsAction(filter) {
  const m = await currentMembership()

  if (!m) return []

  return listFilteredContacts(m.organizationId, filter)
}
