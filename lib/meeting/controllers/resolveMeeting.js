import { upsertMeeting } from './upsertMeeting'
import { findMeetingMatch } from './findMeetingMatch'
import { adoptMeeting } from './adoptMeeting'
import { suggestMeetingMerge } from './suggestMeetingMerge'

// Decide which meeting row a synced event belongs to: adopt a confident
// match in place, else upsert the Google meeting and suggest a merge
// when an existing row merely looks like the same meeting.
export async function resolveMeeting(meeting, contactIds) {
  const match = await findMeetingMatch(meeting, contactIds)

  if (match?.kind === 'adopt') {
    return adoptMeeting(match.row, meeting, match.refresh)
  }

  const { id } = await upsertMeeting(meeting)

  if (match?.kind === 'suggest') await suggestMeetingMerge(match.row.id, id)

  return id
}
