import { MeetingNote } from '../models'

export async function removeMeetingNote(id) {
  await MeetingNote.destroy({ where: { id } })

  return { ok: true }
}
