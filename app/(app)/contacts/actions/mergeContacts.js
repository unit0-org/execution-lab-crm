'use server'

import { mergeContacts } from '@/lib/contacts/merge'

export async function mergeContactsAction(winnerId, loserIds) {
  await mergeContacts(winnerId, loserIds)

  return { ok: true }
}
