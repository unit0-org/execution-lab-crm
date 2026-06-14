'use server'

import { listRelationships } from '@/lib/contact/controllers/listRelationships'
import { withMember } from '@/lib/auth/withMember'

export const listRelationshipsAction = withMember(
  (contactId) =>
    listRelationships(contactId),
  []
)
