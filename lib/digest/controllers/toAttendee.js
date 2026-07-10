// An attendee row for the digest: who checked in and to which event.
export function toAttendee(row) {
  return {
    id: row.contact_id,
    name: row.contact?.full_name || 'Unknown',
    event: row.own_event?.title || 'an event'
  }
}
