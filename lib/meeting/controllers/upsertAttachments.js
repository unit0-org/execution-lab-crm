import { MeetingAttachment } from '../models'

// Save a meeting's attachments once each (by url).
export async function upsertAttachments(meetingId, attachments) {
  for (const attachment of attachments) {
    await MeetingAttachment.findOrCreate({
      where: { meeting_id: meetingId, url: attachment.url },
      defaults: { meeting_id: meetingId, ...attachment }
    })
  }
}
