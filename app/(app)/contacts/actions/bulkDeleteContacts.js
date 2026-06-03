'use server'

import { deleteContacts } from '@/lib/contacts/removeMany'

export async function bulkDeleteContactsAction(ids) {
  return await deleteContacts(ids)
}
