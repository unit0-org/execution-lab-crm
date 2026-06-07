'use server'

import { addCategoryToContacts } from '@/lib/contacts/addCategoryToContacts'

export async function addCategoryToContactsAction(contactIds, categoryId) {
  return addCategoryToContacts(contactIds, categoryId)
}
