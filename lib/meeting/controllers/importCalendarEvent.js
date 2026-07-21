import { resolveMeeting } from './resolveMeeting'
import { upsertAttachments } from './upsertAttachments'
import { mapCalendarEvent } from './mapCalendarEvent'
import { upsertAttendeeContacts } from './upsertAttendeeContacts'
import { linkMeetingParticipants } from './linkMeetingParticipants'

// Persist one calendar event: resolve its attendees to contacts first so
// the meeting can be matched by participant, then upsert the meeting and
// link every (non-self) attendee as a participant.
export async function importCalendarEvent(event) {
  const { meeting, attendees, attachments } = mapCalendarEvent(event)

  if (!attendees.length) return { skipped: true }

  const contacts = await upsertAttendeeContacts(attendees)
  const ids = contacts.map(({ contact }) => contact.id)
  const { id, created } = await resolveMeeting(meeting, ids)

  await upsertAttachments(id, attachments)
  await linkMeetingParticipants(id, contacts)

  return { skipped: false, created }
}
