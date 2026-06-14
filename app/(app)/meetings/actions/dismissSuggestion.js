'use server'

import { dismissSuggestion } from '@/lib/meeting/controllers/dismissSuggestion'
import { withMember } from '@/lib/auth/withMember'

export const dismissSuggestionAction = withMember(
  (id) => dismissSuggestion(id)
)
