'use server'

import { deleteContacts } from '@/lib/contact/controllers/removeMany'
import { withMember } from '@/lib/auth/withMember'

export const bulkDeleteContactsAction = withMember(
  (ids) => deleteContacts(ids)
)
