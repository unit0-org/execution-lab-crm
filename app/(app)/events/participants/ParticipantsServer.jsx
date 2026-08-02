import { listParticipantsAction } from '../actions/listParticipants'
import { listEventOptionsAction } from '../actions/listEventOptions'
import { scopedEventIdsAction } from '../actions/scopedEventIds'
import { toList } from '../components/toList'
import { ParticipantsView } from '../components/ParticipantsView'

// Every participation across every event, so a clean-up spans events
// instead of being repeated on each one. Filters come off the URL — a
// drill-in from the dashboard sends period + type instead of event ids,
// and those resolve to the events that tile counted.
export async function ParticipantsServer({ searchParams }) {
  const { statuses, events, period, type } = await searchParams
  const picked = { statuses: toList(statuses), events: toList(events) }
  const scoped = await scopedEventIdsAction({ period, type, ...picked })
  const [participants, eventOptions] = await Promise.all([
    listParticipantsAction(picked.statuses, scoped),
    listEventOptionsAction()
  ])

  return (
    <ParticipantsView key={`${statuses}-${events}-${period}-${type}`}
      picked={picked} initialParticipants={participants}
      eventOptions={eventOptions} />
  )
}
