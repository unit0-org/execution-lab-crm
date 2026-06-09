'use server'

import { listNotes } from '@/lib/contacts/listNotes'

export async function listNotesAction(contactId) {
  return listNotes(contactId)
}
