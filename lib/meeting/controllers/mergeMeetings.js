import { Op } from 'sequelize'
import { sequelize } from '@/lib/db/sequelize'
import { Meeting, MeetingMergeSuggestion } from '../models'
import { mergeMeetingParticipants } from './mergeMeetingParticipants'
import { mergeMeetingNotes } from './mergeMeetingNotes'
import { mergeMeetingAttachments } from './mergeMeetingAttachments'

// Fold the loser meeting into the winner — preserving participants,
// notes and attachments — then drop the loser and any stale suggestion.
export function mergeMeetings(winnerId, loserId) {
  return sequelize.transaction(async (t) => {
    await mergeMeetingParticipants(winnerId, loserId, t)
    await mergeMeetingNotes(winnerId, loserId, t)
    await mergeMeetingAttachments(winnerId, loserId, t)
    await MeetingMergeSuggestion.destroy({
      where: { [Op.or]: [
        { manual_meeting_id: [winnerId, loserId] },
        { google_meeting_id: [winnerId, loserId] }
      ] },
      transaction: t
    })
    await Meeting.destroy({ where: { id: loserId }, transaction: t })
  })
}
