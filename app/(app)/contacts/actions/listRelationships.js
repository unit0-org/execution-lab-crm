'use server'

import { listRelationships } from '@/lib/contacts/listRelationships'

export async function listRelationshipsAction(contactId) {
  return listRelationships(contactId)
}
