'use server'

import { dismissSuggestion } from '@/lib/meeting/controllers/dismissSuggestion'
import { withOrg } from '@/lib/auth/withOrg'

export const dismissSuggestionAction = withOrg(
  (_organizationId, id) => dismissSuggestion(id)
)
