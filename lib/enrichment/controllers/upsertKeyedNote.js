import { MeetingNote } from '@/lib/meeting/models'

// Replace (or create) the note carrying this key for the meeting, so a
// regenerated summary updates in place instead of duplicating. Returns 1.
export async function upsertKeyedNote(meetingId, note, t) {
  const where = { meeting_id: meetingId, key: note.key }
  const [row, created] = await MeetingNote.findOrCreate({
    where, defaults: { ...where, body: note.body }, transaction: t
  })

  if (!created) await row.update({ body: note.body }, { transaction: t })

  return 1
}
