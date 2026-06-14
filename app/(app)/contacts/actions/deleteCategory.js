'use server'

import { deleteCategory } from '@/lib/contact/controllers/deleteCategory'
import { withMember } from '@/lib/auth/withMember'

export const deleteCategoryAction = withMember(
  (id) => deleteCategory(id)
)
