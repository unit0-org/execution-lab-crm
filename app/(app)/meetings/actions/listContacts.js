'use server'

import { listContacts } from '@/lib/contacts/list'
import { withOrg } from '@/lib/auth/withOrg'

// Contacts for the attendee autocomplete (names + emails).
export const listContactsAction = withOrg(
  (organizationId) => listContacts(organizationId),
  []
)
