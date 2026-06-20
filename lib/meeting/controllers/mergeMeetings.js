import { sequelize } from '@/lib/db/sequelize'
import { foldMeeting } from './foldMeeting'
import { verifyMeetingsExist } from './verifyMeetingsExist'

// Fold every loser meeting into the winner in one transaction —
// preserving participants, notes, attachments and transcripts — then
// drop the losers and any stale suggestions.
export function mergeMeetings(winnerId, loserIds) {
  const ids = [winnerId, ...loserIds]

  return sequelize.transaction(async (t) => {
    const ok = await verifyMeetingsExist(ids, t)

    if (!ok) return { error: 'Not allowed' }

    for (const loserId of loserIds) {
      await foldMeeting(winnerId, loserId, t)
    }

    return { ok: true }
  })
}
