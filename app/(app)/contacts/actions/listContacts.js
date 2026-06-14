'use server'

import { withMember } from '@/lib/auth/withMember'
import { listFilteredContacts } from '@/lib/contact/controllers/listFiltered'

export const listContactsAction = withMember(
  (filter) => listFilteredContacts(filter),
  []
)
