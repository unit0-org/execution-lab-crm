'use server'

import { removeCategoryFromContacts }
  from '@/lib/contact/controllers/removeCategoryFromContacts'
import { withMember } from '@/lib/auth/withMember'

export const removeCategoryFromContactsAction = withMember(
  (contactIds, categoryId) =>
    removeCategoryFromContacts(contactIds, categoryId)
)
