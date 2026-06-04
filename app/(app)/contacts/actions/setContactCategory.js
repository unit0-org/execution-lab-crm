'use server'

import { setContactCategory } from '@/lib/contacts/setContactCategory'

export async function setContactCategoryAction(contactId, categoryId) {
  return setContactCategory(contactId, categoryId)
}
