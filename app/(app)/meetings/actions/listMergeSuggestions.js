'use server'

import { listSuggestions } from '@/lib/meeting/controllers/listSuggestions'
import { withMember } from '@/lib/auth/withMember'

export const listMergeSuggestionsAction = withMember(
  () => listSuggestions(),
  []
)
