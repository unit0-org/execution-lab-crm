'use server'

import { setContactCategories } from '@/lib/contacts/setContactCategories'
import { withOrg } from '@/lib/auth/withOrg'

export const setContactCategoriesAction = withOrg(
  (organizationId, contactId, categoryIds) =>
    setContactCategories(organizationId, contactId, categoryIds)
)
