import { listParticipantsAction } from '../actions/listParticipants'
import { listEventOptionsAction } from '../actions/listEventOptions'
import { toList } from '../components/toList'
import { ParticipantsView } from '../components/ParticipantsView'

// Every participation across every event, so a clean-up spans events
// instead of being repeated on each one. Filters come off the URL.
export async function ParticipantsServer({ searchParams }) {
  const { statuses, events } = await searchParams
  const picked = { statuses: toList(statuses), events: toList(events) }
  const [participants, eventOptions] = await Promise.all([
    listParticipantsAction(picked.statuses, picked.events),
    listEventOptionsAction()
  ])

  return (
    <ParticipantsView key={`${statuses}-${events}`} picked={picked}
      initialParticipants={participants} eventOptions={eventOptions} />
  )
}
