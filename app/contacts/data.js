'use server'

import { listContacts } from '@/lib/contacts/list'
import { getContact } from '@/lib/contacts/get'

export async function listContactsAction() {
  return listContacts()
}

export async function getContactAction(id) {
  return getContact(id)
}
