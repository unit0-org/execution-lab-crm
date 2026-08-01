import { eventAttendeeRows } from './eventAttendeeRows'
import { groupClientsByEvent } from './groupClientsByEvent'
import { toRankedEvent } from './toRankedEvent'

// The period's events ranked by how well they turned attendees into
// clients. An event nobody attended is dropped rather than ranked 0% —
// it has no conversion to report, which is not the same as a bad one.
export async function bestConvertingEvents(events, clients) {
  const ids = events.map((event) => event.id)
  const rows = await eventAttendeeRows(ids)
  const byEvent = groupClientsByEvent(rows, clients)

  return events
    .map((event) => toRankedEvent(event, byEvent.get(event.id)))
    .filter((event) => event.attended > 0)
    .sort((a, b) => b.toClient - a.toClient)
}
