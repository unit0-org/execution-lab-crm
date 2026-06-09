'use server'

import { listNotes } from '@/lib/contacts/listNotes'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function listNotesAction(contactId) {
  const m = await currentMembership()

  if (!m) return []

  return listNotes(m.organizationId, contactId)
}
