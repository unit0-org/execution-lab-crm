import { Op } from 'sequelize'
import { Meeting, MeetingMergeSuggestion } from '../models'
import { mergeMeetingParticipants } from './mergeMeetingParticipants'
import { mergeMeetingNotes } from './mergeMeetingNotes'
import { mergeMeetingAttachments } from './mergeMeetingAttachments'
import { mergeMeetingTranscripts } from './mergeMeetingTranscripts'

// Move the loser's data onto the winner, then drop the loser and any
// stale suggestion referencing either meeting. The loser destroy is
// `force` (real delete) so its child rows cascade; a merge is not undoable.
export async function foldMeeting(winnerId, loserId, t) {
  const pair = [winnerId, loserId]

  await mergeMeetingParticipants(winnerId, loserId, t)
  await mergeMeetingNotes(winnerId, loserId, t)
  await mergeMeetingAttachments(winnerId, loserId, t)
  await mergeMeetingTranscripts(winnerId, loserId, t)
  await MeetingMergeSuggestion.destroy({
    where: { [Op.or]: [
      { manual_meeting_id: pair },
      { google_meeting_id: pair }
    ] },
    transaction: t
  })

  await Meeting.destroy({
    where: { id: loserId }, transaction: t, force: true
  })
}
