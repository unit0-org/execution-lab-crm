'use server'

import { deleteCategory } from '@/lib/contacts/deleteCategory'
import { withOrg } from '@/lib/auth/withOrg'

export const deleteCategoryAction = withOrg(
  (organizationId, id) => deleteCategory(organizationId, id)
)
