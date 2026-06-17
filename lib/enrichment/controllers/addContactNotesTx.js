import { ContactNote } from '@/lib/contact/models'

const noteDefaults = (contactId, note) => {
  const row = { contact_id: contactId, body: note.body }

  if (note.notedAt) row.noted_at = note.notedAt

  return row
}

// Add each note unless an identical body already exists on the contact;
// returns how many were added.
export async function addContactNotesTx(contactId, notes, t) {
  let added = 0

  for (const note of notes || []) {
    if (!note || !note.body) continue

    const [, created] = await ContactNote.findOrCreate({
      where: { contact_id: contactId, body: note.body },
      defaults: noteDefaults(contactId, note),
      transaction: t
    })

    if (created) added += 1
  }

  return added
}
