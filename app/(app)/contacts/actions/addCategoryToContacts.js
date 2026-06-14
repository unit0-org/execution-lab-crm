'use server'

import { addCategoryToContacts }
  from '@/lib/contact/controllers/addCategoryToContacts'
import { withMember } from '@/lib/auth/withMember'

export const addCategoryToContactsAction = withMember(
  (contactIds, categoryId) =>
    addCategoryToContacts(contactIds, categoryId)
)
