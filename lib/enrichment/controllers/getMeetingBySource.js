import { Meeting, MeetingTranscript } from '@/lib/meeting/models'

const shape = (meeting, hasTranscript) => ({
  id: meeting.id,
  title: meeting.title,
  startsAt: meeting.starts_at,
  hasTranscript
})

// Op5: look up a meeting by the Drive file it was enriched from, with
// whether a transcript is attached. Read-only; { meeting: null } when none.
export async function getMeetingBySource(driveFileId) {
  const meeting = await Meeting.findOne({
    where: { source_drive_id: driveFileId }
  })

  if (!meeting) return { meeting: null }

  const transcript = await MeetingTranscript.findOne({
    where: { drive_file_id: driveFileId }
  })

  return { meeting: shape(meeting, Boolean(transcript)) }
}
