// Map a Luma event's location to our event type name. Luma marks physical
// events with location_type 'offline' (and a geo address); virtual ones
// carry a meeting_url (location_type 'meet', 'zoom', …). Unknown → null.
export function eventTypeFromLocation(apiEvent) {
  const e = apiEvent.event || apiEvent
  const inPerson = e.location_type === 'offline' || Boolean(e.geo_address_json)
  const online = Boolean(e.location_type || e.meeting_url)

  if (inPerson) return 'in-person'

  return online ? 'online' : null
}
