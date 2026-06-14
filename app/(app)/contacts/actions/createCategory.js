'use server'

import { createCategory } from '@/lib/contact/controllers/createCategory'
import { withOrg } from '@/lib/auth/withOrg'

export const createCategoryAction = withOrg(
  (organizationId, name, color) =>
    createCategory(organizationId, name, color)
)
