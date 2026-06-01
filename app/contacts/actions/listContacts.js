'use server'

import { listContacts } from '@/lib/contacts/list'

export async function listContactsAction() {
  try {
    return await listContacts()
  } catch (e) {
    console.error('[contacts] list failed:', e)
    throw e
  }
}
