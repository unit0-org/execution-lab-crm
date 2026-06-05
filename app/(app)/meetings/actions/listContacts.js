'use server'

import { listContacts } from '@/lib/contacts/list'

// Contacts for the attendee autocomplete (names + emails).
export async function listContactsAction() {
  return listContacts()
}
