'use server'

import { createCategory } from '@/lib/contact/controllers/createCategory'
import { withMember } from '@/lib/auth/withMember'

export const createCategoryAction = withMember(
  (name, color) =>
    createCategory(name, color)
)
