'use server'

import { mergeContacts } from '@/lib/contacts/merge'

export async function mergeContactsAction(winnerId, loserIds) {
  return await mergeContacts(winnerId, loserIds)
}
