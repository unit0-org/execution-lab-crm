import { MeetingNote } from '../models'

// Notes are free text, so every loser note just moves to the winner.
export async function mergeMeetingNotes(winnerId, loserId, t) {
  await MeetingNote.update(
    { meeting_id: winnerId },
    { where: { meeting_id: loserId }, transaction: t }
  )
}
