import { upsertMeeting } from './upsertMeeting'
import { findManualMeetingMatch } from './findManualMeetingMatch'
import { suggestMeetingMerge } from './suggestMeetingMerge'

// Decide which meeting row a synced event belongs to: adopt an exact
// hand-created match in place, otherwise upsert the Google meeting and
// suggest a merge when a manual meeting merely looks similar.
export async function resolveMeeting(organizationId, meeting) {
  const match = await findManualMeetingMatch(organizationId, meeting)

  if (match?.exact) {
    await match.row.update(meeting)

    return match.row.id
  }

  const { id } = await upsertMeeting(organizationId, meeting)

  if (match?.likely) await suggestMeetingMerge(match.row.id, id)

  return id
}
