'use server'

import { listSuggestions } from '@/lib/meeting/controllers/listSuggestions'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function listMergeSuggestionsAction() {
  const m = await currentMembership()

  if (!m) return []

  return listSuggestions(m.organizationId)
}
