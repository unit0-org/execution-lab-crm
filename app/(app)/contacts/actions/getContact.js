'use server'

import { getContact } from '@/lib/contacts/get'

export async function getContactAction(id) {
  return await getContact(id)
}
