'use server'

import { listCategories } from '@/lib/contact/controllers/listCategories'
import { withOrg } from '@/lib/auth/withOrg'

export const listCategoriesAction = withOrg(
  (organizationId) => listCategories(organizationId),
  []
)
