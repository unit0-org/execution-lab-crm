import { matchBySourceDrive } from './matchBySourceDrive'
import { matchByTimeAndPeople } from './matchByTimeAndPeople'
import { reuseMeeting } from './reuseMeeting'
import { createSourceMeeting } from './createSourceMeeting'

// Op2: dedup a meeting by sourceDriveId; else bridge onto a calendar-synced
// meeting within ±2h that shares a participant (stamping its
// source_drive_id); else create. Returns { id, created, matchedBy }.
export async function upsertMeetingBySource(meeting, contactIds, t) {
  const bySource = await matchBySourceDrive(meeting.sourceDriveId, t)

  if (bySource) return reuseMeeting(bySource, meeting, t, 'sourceDriveId')

  const bridged = await matchByTimeAndPeople(meeting, contactIds, t)

  if (bridged) return reuseMeeting(bridged, meeting, t, 'timeAndPeople')

  return createSourceMeeting(meeting, t)
}
