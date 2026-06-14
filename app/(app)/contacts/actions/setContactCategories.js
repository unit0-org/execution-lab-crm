'use server'

import { setContactCategories }
  from '@/lib/contact/controllers/setContactCategories'
import { withMember } from '@/lib/auth/withMember'

export const setContactCategoriesAction = withMember(
  (contactId, categoryIds) =>
    setContactCategories(contactId, categoryIds)
)
