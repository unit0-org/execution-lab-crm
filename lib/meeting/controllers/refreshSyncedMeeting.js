import { suggestMeetingMerge } from './suggestMeetingMerge'

// Refresh the row that already holds this Google event from the latest
// event data, and — when a separate un-synced look-alike turned up —
// suggest merging the two rather than silently leaving a duplicate.
export async function refreshSyncedMeeting(synced, meeting, match) {
  await synced.update(meeting)

  if (match) await suggestMeetingMerge(match.row.id, synced.id)

  return synced.id
}
