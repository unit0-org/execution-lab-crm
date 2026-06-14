'use server'

import { mergeContacts } from '@/lib/contact/controllers/merge'
import { withMember } from '@/lib/auth/withMember'

export const mergeContactsAction = withMember(
  (winnerId, loserIds) =>
    mergeContacts(winnerId, loserIds)
)
