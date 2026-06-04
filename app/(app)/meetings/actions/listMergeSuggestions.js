'use server'

import { listSuggestions } from '@/lib/meeting/controllers/listSuggestions'

export async function listMergeSuggestionsAction() {
  return listSuggestions()
}
