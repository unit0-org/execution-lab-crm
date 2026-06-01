'use server'

import { listContacts } from '@/lib/contacts/list'

export async function listContactsAction() {
  return listContacts()
}
