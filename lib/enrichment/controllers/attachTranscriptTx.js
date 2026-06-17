import { MeetingTranscript } from '@/lib/meeting/models'

// Op4: attach a transcript by drive_file_id (idempotent). If one with that
// id is already present it's a no-op. Returns { attached, alreadyPresent }.
export async function attachTranscriptTx(meetingId, transcript, t) {
  const existing = await MeetingTranscript.findOne({
    where: { drive_file_id: transcript.driveFileId }, transaction: t
  })

  if (existing) return { attached: false, alreadyPresent: true }

  await MeetingTranscript.create({
    meeting_id: meetingId,
    drive_file_id: transcript.driveFileId,
    source_url: transcript.sourceUrl,
    text: transcript.text
  }, { transaction: t })

  return { attached: true, alreadyPresent: false }
}
