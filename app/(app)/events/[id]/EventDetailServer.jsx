import { getEventAction } from '../actions/getEvent'
import { listAttendeesAction } from '../actions/listAttendees'
import { EventDetailView } from '../components/EventDetailView'

// Server-side load for one event and its attendees, seeded into the
// client view so it renders complete without skeletons.
export async function EventDetailServer({ params }) {
  const { id } = await params
  const event = await getEventAction(id)

  if (!event) return <EventDetailView initialEvent={null} />

  const attendees = await listAttendeesAction(id)

  return <EventDetailView initialEvent={event} attendees={attendees} />
}
