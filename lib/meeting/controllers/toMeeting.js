// Map a Google Calendar event to our meeting columns.
export function toMeeting(event) {
  return {
    google_event_id: event.id,
    title: event.summary || 'Untitled meeting',
    starts_at: event.start?.dateTime || event.start?.date || null,
    ends_at: event.end?.dateTime || event.end?.date || null,
    url: event.htmlLink || null,
    online: Boolean(event.hangoutLink || event.conferenceData)
  }
}
