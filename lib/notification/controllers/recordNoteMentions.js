import { NoteMention } from '../models'

// Persist who was tagged in a note. Idempotent on re-save via the unique
// (contact_note_id, mentioned_user_id) index.
export function recordNoteMentions({ contactId, noteId, userIds }) {
  const rows = userIds.map((userId) => ({
    contact_id: contactId,
    contact_note_id: noteId,
    mentioned_user_id: userId
  }))

  return NoteMention.bulkCreate(rows, { ignoreDuplicates: true })
}
