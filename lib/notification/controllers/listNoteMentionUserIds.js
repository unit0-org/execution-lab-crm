import { NoteMention } from '../models'

// The member ids already mentioned in a note — to diff on edit so only
// newly-added mentions get notified.
export async function listNoteMentionUserIds(noteId) {
  const rows = await NoteMention.findAll({
    where: { contact_note_id: noteId },
    attributes: ['mentioned_user_id']
  })

  return rows.map((row) => row.mentioned_user_id)
}
