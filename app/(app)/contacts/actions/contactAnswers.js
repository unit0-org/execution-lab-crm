'use server'

import { contactNuggets } from '@/lib/contact/controllers/contactNuggets'
import { withMember } from '@/lib/auth/withMember'

export const contactAnswersAction = withMember(
  (contactId) => contactNuggets(contactId),
  []
)
