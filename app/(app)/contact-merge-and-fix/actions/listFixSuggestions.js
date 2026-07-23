'use server'

import { findFixSuggestions }
  from '@/lib/contact-merge-and-fix/controllers/findFixSuggestions'
import { withMember } from '@/lib/auth/withMember'

export const listFixSuggestionsAction = withMember(
  () => findFixSuggestions()
)
