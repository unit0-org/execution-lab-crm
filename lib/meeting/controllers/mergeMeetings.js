import { sequelize } from '@/lib/db/sequelize'
import { foldMeeting } from './foldMeeting'
import { verifyMeetingsExist } from './verifyMeetingsExist'

// Fold the loser meeting into the winner — preserving participants,
// notes and attachments — then drop the loser and any stale suggestion.
export function mergeMeetings(winnerId, loserId) {
  const ids = [winnerId, loserId]

  return sequelize.transaction(async (t) => {
    const ok = await verifyMeetingsExist(ids, t)

    if (!ok) return { error: 'Not allowed' }

    return foldMeeting(winnerId, loserId, t)
  })
}
