import { getEventAction } from '../../actions/getEvent'
import { getEventConversionAction }
  from '../../actions/getEventConversion'
import { EventSettingsView } from '../../components/EventSettingsView'
import { EventNotFound } from '../../components/EventNotFound'

// Server-side load for one event's settings, seeded into the client view
// so it renders complete without skeletons.
export async function EventSettingsServer({ params }) {
  const { id } = await params
  const event = await getEventAction(id)

  if (!event) return <EventNotFound />

  const conversion = await getEventConversionAction(id)

  return <EventSettingsView event={event} initialConversion={conversion} />
}
