import { matchByParticipant } from './matchByParticipant'
import { withinMinutes } from './meetingMatch'

const TIGHT_MINUTES = 15

// An un-synced meeting sharing a participant near this event's time,
// even under a different title: within ~15 min it is confidently the
// same meeting (adopt, keeping its title); within 2h, only suggest.
export async function findPeopleMatch({ starts_at }, contactIds) {
  const row = await matchByParticipant(starts_at, contactIds)

  if (!row) return null

  if (withinMinutes(row.starts_at, starts_at, TIGHT_MINUTES)) {
    return { kind: 'adopt', row, refresh: false }
  }

  return { kind: 'suggest', row }
}
