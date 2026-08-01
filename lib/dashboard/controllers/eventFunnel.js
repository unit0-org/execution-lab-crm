import { funnelEvents } from './funnelEvents'
import { attendeeCheckins } from './attendeeCheckins'
import { funnelMaps } from './funnelMaps'
import { toFunnelAttendee } from './toFunnelAttendee'
import { funnelTotals } from './funnelTotals'
import { bestConvertingEvents } from './bestConvertingEvents'

// Everything the dashboard renders for one period + type filter: the KPI
// row, the three funnel stages, and the events ranked by conversion.
export async function eventFunnel(filter) {
  const events = await funnelEvents(filter)
  const ids = events.map((event) => event.id)
  const [rows, maps] = await Promise.all([
    attendeeCheckins(ids), funnelMaps()
  ])
  const attendees = rows.map((row) => toFunnelAttendee(row, maps))
  const best = await bestConvertingEvents(events, maps.clients)

  return { ...funnelTotals(events, attendees), best }
}
