'use server'

import { withOrg } from '@/lib/auth/withOrg'
import { listFilteredContacts } from '@/lib/contacts/listFiltered'

export const listContactsAction = withOrg(
  (organizationId, filter) => listFilteredContacts(organizationId, filter),
  []
)
