import { ContactNote } from '@/lib/db/models'

const toNote = (row) => ({
  id: row.id,
  body: row.body,
  date: row.noted_at
})

// A contact's manual notes, newest first by their date.
export async function listNotes(contactId) {
  const rows = await ContactNote.findAll({
    where: { contact_id: contactId },
    order: [['noted_at', 'DESC']]
  })

  return rows.map((row) => toNote(row.toJSON()))
}
