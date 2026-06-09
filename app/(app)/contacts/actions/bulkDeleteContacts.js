'use server'

import { deleteContacts } from '@/lib/contacts/removeMany'
import { withOrg } from '@/lib/auth/withOrg'

export const bulkDeleteContactsAction = withOrg(
  (organizationId, ids) => deleteContacts(organizationId, ids)
)
