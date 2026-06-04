'use server'

import { setContactCategories } from '@/lib/contacts/setContactCategories'

export async function setContactCategoriesAction(contactId, categoryIds) {
  return setContactCategories(contactId, categoryIds)
}
