'use server'

import { mergeContacts } from '@/lib/contact/controllers/merge'
import { withOrg } from '@/lib/auth/withOrg'

export const mergeContactsAction = withOrg(
  (organizationId, winnerId, loserIds) =>
    mergeContacts(organizationId, winnerId, loserIds)
)
