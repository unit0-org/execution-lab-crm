'use server'

import { listCategories } from '@/lib/contact/controllers/listCategories'
import { withMember } from '@/lib/auth/withMember'

export const listCategoriesAction = withMember(
  () => listCategories(),
  []
)
