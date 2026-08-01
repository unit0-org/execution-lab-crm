import { isAfter } from './isAfter'

// One scored attendee: did anything happen after they first checked in,
// did they take a meeting, and did they become a client.
export function toFunnelAttendee(row, maps) {
  const contactId = row.contact_id
  const first = new Date(row.first)

  return {
    contactId,
    checkins: Number(row.checkins),
    nurtured: isAfter(maps.latest.get(contactId), first),
    met: isAfter(maps.meetings.get(contactId), first),
    client: isAfter(maps.clients.get(contactId), first)
  }
}
