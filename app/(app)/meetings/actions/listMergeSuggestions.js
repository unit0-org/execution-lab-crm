'use server'

import { listSuggestions } from '@/lib/meeting/controllers/listSuggestions'
import { withOrg } from '@/lib/auth/withOrg'

export const listMergeSuggestionsAction = withOrg(
  (organizationId) => listSuggestions(organizationId),
  []
)
