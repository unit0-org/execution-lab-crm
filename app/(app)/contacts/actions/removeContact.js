'use server'

import { deleteContact } from '@/lib/contacts/remove'

export async function removeContactAction(id) {
  await deleteContact(id)

  return { ok: true }
}
