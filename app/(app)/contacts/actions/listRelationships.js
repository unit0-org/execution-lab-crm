'use server'

import { listRelationships } from '@/lib/contacts/listRelationships'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function listRelationshipsAction(contactId) {
  const m = await currentMembership()

  if (!m) return []

  return listRelationships(m.organizationId, contactId)
}
