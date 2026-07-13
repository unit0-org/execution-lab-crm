import { ContactNote } from '@/lib/contact/models'

const noteDefaults = (contactId, note, meta) => {
  const row = { contact_id: contactId, body: note.body }

  if (note.notedAt) row.noted_at = note.notedAt

  if (meta?.authorUserId) row.author_user_id = meta.authorUserId

  return row
}

// Add each note unless an identical body already exists on the contact,
// attributed to the team member whose integration is writing it.
// Returns how many were added.
export async function addContactNotesTx(contactId, notes, t, meta) {
  let added = 0

  for (const note of notes || []) {
    if (!note || !note.body) continue

    const [, created] = await ContactNote.findOrCreate({
      where: { contact_id: contactId, body: note.body },
      defaults: noteDefaults(contactId, note, meta),
      transaction: t
    })

    if (created) added += 1
  }

  return added
}
