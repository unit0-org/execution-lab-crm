'use server'

import { mergeContacts } from '@/lib/contacts/merge'

export async function mergeContactsAction(winnerId, loserIds) {
  return mergeContacts(winnerId, loserIds)
}
