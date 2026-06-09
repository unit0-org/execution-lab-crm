'use server'

import { mergeContacts } from '@/lib/contacts/merge'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function mergeContactsAction(winnerId, loserIds) {
  const m = await currentMembership()

  if (!m) return { error: 'Not allowed' }

  return mergeContacts(m.organizationId, winnerId, loserIds)
}
