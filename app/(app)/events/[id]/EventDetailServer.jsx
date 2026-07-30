import { getEventAction } from '../actions/getEvent'
import { listAttendeesAction } from '../actions/listAttendees'
import { getConversionSettingsAction } from '../actions/getConversionSettings'
import { EventDetailView } from '../components/EventDetailView'

// Server-side load for one event, its attendees and its ad tracking,
// seeded into the client view so it renders complete without skeletons.
// The last two run together — the tracking read calls LinkedIn, and there
// is no reason for the attendee list to wait behind it.
export async function EventDetailServer({ params }) {
  const { id } = await params
  const event = await getEventAction(id)

  if (!event) return <EventDetailView initialEvent={null} />

  const [attendees, settings] = await Promise.all([
    listAttendeesAction(id),
    getConversionSettingsAction(id)
  ])

  return <EventDetailView initialEvent={event} attendees={attendees}
    settings={settings} />
}
