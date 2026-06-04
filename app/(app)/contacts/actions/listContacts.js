'use server'

import { listFilteredContacts } from '@/lib/contacts/listFiltered'

export async function listContactsAction(filter) {
  return listFilteredContacts(filter)
}
