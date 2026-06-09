'use server'

import { mergeContacts } from '@/lib/contacts/merge'
import { withOrg } from '@/lib/auth/withOrg'

export const mergeContactsAction = withOrg(
  (organizationId, winnerId, loserIds) =>
    mergeContacts(organizationId, winnerId, loserIds)
)
