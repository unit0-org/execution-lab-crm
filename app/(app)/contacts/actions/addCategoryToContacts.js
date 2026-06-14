'use server'

import { addCategoryToContacts }
  from '@/lib/contact/controllers/addCategoryToContacts'
import { withOrg } from '@/lib/auth/withOrg'

export const addCategoryToContactsAction = withOrg(
  (organizationId, contactIds, categoryId) =>
    addCategoryToContacts(organizationId, contactIds, categoryId)
)
