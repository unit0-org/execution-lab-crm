'use server'

import { removeCategoryFromContacts }
  from '@/lib/contacts/removeCategoryFromContacts'
import { withOrg } from '@/lib/auth/withOrg'

export const removeCategoryFromContactsAction = withOrg(
  (organizationId, contactIds, categoryId) =>
    removeCategoryFromContacts(organizationId, contactIds, categoryId)
)
