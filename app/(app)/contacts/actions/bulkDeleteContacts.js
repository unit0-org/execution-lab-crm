'use server'

import { deleteContacts } from '@/lib/contact/controllers/removeMany'
import { withOrg } from '@/lib/auth/withOrg'

export const bulkDeleteContactsAction = withOrg(
  (organizationId, ids) => deleteContacts(organizationId, ids)
)
