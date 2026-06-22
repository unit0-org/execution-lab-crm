import { upsertMeeting } from './upsertMeeting'
import { findMeetingMatch } from './findMeetingMatch'
import { findSyncedMeeting } from './findSyncedMeeting'
import { refreshSyncedMeeting } from './refreshSyncedMeeting'
import { adoptMeeting } from './adoptMeeting'
import { suggestMeetingMerge } from './suggestMeetingMerge'

// Decide which row a synced event belongs to. A re-sync refreshes the
// row already holding this event id; a first sync adopts a confident
// un-synced match, else upserts and suggests a merge for a look-alike.
export async function resolveMeeting(meeting, contactIds) {
  const synced = await findSyncedMeeting(meeting.google_event_id)
  const match = await findMeetingMatch(meeting, contactIds)

  if (synced) return refreshSyncedMeeting(synced, meeting, match)

  if (match?.kind === 'adopt') {
    return adoptMeeting(match.row, meeting, match.refresh)
  }

  const { id } = await upsertMeeting(meeting)

  if (match?.kind === 'suggest') await suggestMeetingMerge(match.row.id, id)

  return id
}
