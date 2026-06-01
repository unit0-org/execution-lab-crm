'use server'

import { getContact } from '@/lib/contacts/get'

export async function getContactAction(id) {
  try {
    return await getContact(id)
  } catch (e) {
    console.error('[contacts] get failed:', e)
    throw e
  }
}
