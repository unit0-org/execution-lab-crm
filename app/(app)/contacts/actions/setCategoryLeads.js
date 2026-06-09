'use server'

import { setCategoryLeads } from '@/lib/contacts/setCategoryLeads'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function setCategoryLeadsAction(id, includeInLeads) {
  const m = await currentMembership()

  if (!m) return { error: 'Not allowed' }

  return setCategoryLeads(m.organizationId, id, includeInLeads)
}
