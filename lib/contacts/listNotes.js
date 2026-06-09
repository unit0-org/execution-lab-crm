import { ContactNote } from '@/lib/db/models'

const toNote = (row) => ({
  id: row.id,
  body: row.body,
  date: row.created_at
})

// A contact's manual notes, newest first.
export async function listNotes(contactId) {
  const rows = await ContactNote.findAll({
    where: { contact_id: contactId },
    order: [['created_at', 'DESC']]
  })

  return rows.map((row) => toNote(row.toJSON()))
}
