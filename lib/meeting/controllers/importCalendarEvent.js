import { upsertContact } from '@/lib/contacts/upsertContact'
import { upsertMeeting } from './upsertMeeting'
import { upsertMeetingParticipant } from './upsertMeetingParticipant'
import { mapCalendarEvent } from './mapCalendarEvent'

// Persist one calendar event: the meeting plus a contact-linked
// participant for every (non-self) attendee.
export async function importCalendarEvent(event) {
  const { meeting, attendees } = mapCalendarEvent(event)

  if (!attendees.length) return { skipped: true }

  const { id } = await upsertMeeting(meeting)

  for (const attendee of attendees) {
    const contact = await upsertContact(attendee)

    await upsertMeetingParticipant(id, contact.id, attendee)
  }

  return { skipped: false }
}
