'use server'

import { createCategory } from '@/lib/contacts/createCategory'
import { withOrg } from '@/lib/auth/withOrg'

export const createCategoryAction = withOrg(
  (organizationId, name, color) =>
    createCategory(organizationId, name, color)
)
