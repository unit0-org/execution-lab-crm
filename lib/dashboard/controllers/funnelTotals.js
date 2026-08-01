import { rate } from './rate'
import { countBy, sumBy } from './countBy'

// The KPI row and the three funnel stages. `unique` counts people;
// `participants` counts check-ins, so someone who came twice shows up
// once in the funnel and twice in the headline count.
export function funnelTotals(events, attendees) {
  const unique = attendees.length
  const nurturing = countBy(attendees, 'nurtured')
  const clients = countBy(attendees, 'client')

  return {
    events: events.length,
    participants: sumBy(events, 'attended'),
    unique,
    toClient: rate(clients, unique),
    toMeeting: rate(countBy(attendees, 'met'), unique),
    stages: { attended: unique, nurturing, clients },
    steps: [rate(nurturing, unique), rate(clients, nurturing)]
  }
}
