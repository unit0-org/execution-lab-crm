import { MeetingTranscript } from '../models'

// drive_file_id is globally unique, so winner and loser can never hold the
// same transcript — every loser transcript moves to the winner.
export async function mergeMeetingTranscripts(winnerId, loserId, t) {
  await MeetingTranscript.update(
    { meeting_id: winnerId },
    { where: { meeting_id: loserId }, transaction: t }
  )
}
