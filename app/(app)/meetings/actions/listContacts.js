'use server'

import { listContacts } from '@/lib/contacts/list'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

// Contacts for the attendee autocomplete (names + emails).
export async function listContactsAction() {
  const m = await currentMembership()

  if (!m) return []

  return listContacts(m.organizationId)
}
