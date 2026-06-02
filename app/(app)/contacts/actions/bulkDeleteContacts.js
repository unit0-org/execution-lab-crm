'use server'

import { deleteContacts } from '@/lib/contacts/removeMany'

export async function bulkDeleteContactsAction(ids) {
  await deleteContacts(ids)

  return { ok: true }
}
