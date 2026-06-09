'use server'

import { contactNuggets } from '@/lib/contacts/contactNuggets'
import { withOrg } from '@/lib/auth/withOrg'

export const contactAnswersAction = withOrg(
  (organizationId, contactId) => contactNuggets(organizationId, contactId),
  []
)
