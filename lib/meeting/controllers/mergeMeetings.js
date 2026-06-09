import { sequelize } from '@/lib/db/sequelize'
import { foldMeeting } from './foldMeeting'
import { verifyMeetingsInOrg } from './verifyMeetingsInOrg'

// Fold the loser meeting into the winner — preserving participants,
// notes and attachments — then drop the loser and any stale suggestion.
export function mergeMeetings(organizationId, winnerId, loserId) {
  const ids = [winnerId, loserId]

  return sequelize.transaction(async (t) => {
    const ok = await verifyMeetingsInOrg(organizationId, ids, t)

    if (!ok) return { error: 'Not allowed' }

    return foldMeeting(winnerId, loserId, t)
  })
}
