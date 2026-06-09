'use server'

import { dismissSuggestion } from '@/lib/meeting/controllers/dismissSuggestion'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function dismissSuggestionAction(id) {
  const m = await currentMembership()

  if (!m) return { error: 'Not allowed' }

  return dismissSuggestion(id)
}
