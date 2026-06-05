import { upsertContact } from '@/lib/contacts/upsertContact'
import { resolveMeeting } from './resolveMeeting'
import { upsertMeetingParticipant } from './upsertMeetingParticipant'
import { upsertAttachments } from './upsertAttachments'
import { mapCalendarEvent } from './mapCalendarEvent'

// Persist one calendar event: the meeting plus a contact-linked
// participant for every (non-self) attendee.
export async function importCalendarEvent(event) {
  const { meeting, attendees, attachments } = mapCalendarEvent(event)

  if (!attendees.length) return { skipped: true }

  const id = await resolveMeeting(meeting)

  await upsertAttachments(id, attachments)

  for (const attendee of attendees) {
    const contact = await upsertContact(attendee)

    await upsertMeetingParticipant(id, contact.id, attendee)
  }

  return { skipped: false }
}
