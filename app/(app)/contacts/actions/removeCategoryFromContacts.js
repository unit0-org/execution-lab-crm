'use server'

import { removeCategoryFromContacts }
  from '@/lib/contacts/removeCategoryFromContacts'

export async function removeCategoryFromContactsAction(contactIds, categoryId) {
  return removeCategoryFromContacts(contactIds, categoryId)
}
