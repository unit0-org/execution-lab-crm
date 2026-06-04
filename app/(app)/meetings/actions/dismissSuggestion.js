'use server'

import { dismissSuggestion } from '@/lib/meeting/controllers/dismissSuggestion'

export async function dismissSuggestionAction(id) {
  return dismissSuggestion(id)
}
