import { isAfter } from './isAfter'

// Per event: how many people it drew, and how many of them became clients
// after that event — measured from each attendee's own check-in, so an
// earlier purchase is never credited to a later event.
export function groupClientsByEvent(rows, clients) {
  const byEvent = new Map()

  for (const row of rows) {
    const tally = byEvent.get(row.own_event_id) || { attended: 0, clients: 0 }
    const became = clients.get(row.contact_id)

    tally.attended += 1

    if (isAfter(became, new Date(row.checked_in_at))) tally.clients += 1

    byEvent.set(row.own_event_id, tally)
  }

  return byEvent
}
