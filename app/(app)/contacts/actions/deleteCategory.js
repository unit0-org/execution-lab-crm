'use server'

import { deleteCategory } from '@/lib/contact/controllers/deleteCategory'
import { withOrg } from '@/lib/auth/withOrg'

export const deleteCategoryAction = withOrg(
  (organizationId, id) => deleteCategory(organizationId, id)
)
