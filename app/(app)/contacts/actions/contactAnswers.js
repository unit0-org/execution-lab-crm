'use server'

import { contactNuggets } from '@/lib/contact/controllers/contactNuggets'
import { withOrg } from '@/lib/auth/withOrg'

export const contactAnswersAction = withOrg(
  (organizationId, contactId) => contactNuggets(organizationId, contactId),
  []
)
