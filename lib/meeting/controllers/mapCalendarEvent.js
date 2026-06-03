import { toMeeting } from './toMeeting'
import { toAttachments } from './toAttachments'

const splitName = (a) => {
  const [first, ...rest] = (a.displayName || '').trim().split(' ')

  return { first_name: first || null, last_name: rest.join(' ') || null }
}

const toAttendee = (a) => ({
  email: a.email || null,
  ...splitName(a),
  organizer: Boolean(a.organizer),
  response_status: a.responseStatus || null
})

const guests = (event) =>
  (event.attendees || [])
    .filter((a) => a.email && !a.resource && !a.self)
    .map(toAttendee)

// Shape a Google Calendar event into our meeting + attendee data.
export function mapCalendarEvent(event) {
  return {
    meeting: toMeeting(event),
    attendees: guests(event),
    attachments: toAttachments(event)
  }
}
