'use server'

import { getContact } from '@/lib/contacts/get'
import { withOrg } from '@/lib/auth/withOrg'

export const getContactAction = withOrg(
  (organizationId, id) => getContact(organizationId, id),
  null
)
