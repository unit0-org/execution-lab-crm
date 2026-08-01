import { rate } from './rate'

// An event row for the ranking table. The rate is over attendees we can
// actually score — a check-in with no contact behind it can never be
// followed to a purchase, so counting it would only dilute the rate.
export function toRankedEvent(event, tally) {
  const clients = tally?.clients || 0
  const scored = tally?.attended || 0

  return { ...event, clients, toClient: rate(clients, scored) }
}
