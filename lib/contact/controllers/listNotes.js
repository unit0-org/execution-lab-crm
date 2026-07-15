import { ContactNote } from '@/lib/contact/models'
import { memberNamesByUserId } from '@/lib/org/controllers/memberNamesByUserId'

const toNote = (row, names, viewerId) => ({
  id: row.id,
  body: row.body,
  date: row.noted_at,
  authorName: names.get(row.author_user_id) || null,
  mine: row.author_user_id === viewerId
})

// A contact's manual notes, newest first by their date, each carrying the
// name of whoever wrote it (null when nobody was recorded) and whether it is
// the viewer's own — which gates its edit/delete controls.
export async function listNotes(contactId, viewerId) {
  const rows = await ContactNote.findAll({
    where: { contact_id: contactId },
    order: [['noted_at', 'DESC']]
  })

  const notes = rows.map((row) => row.toJSON())
  const names = await memberNamesByUserId(
    notes.map((note) => note.author_user_id)
  )

  return notes.map((note) => toNote(note, names, viewerId))
}
