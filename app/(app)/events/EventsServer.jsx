import { listEventsAction } from './actions/listEvents'
import { EventsView } from './components/EventsView'

export async function EventsServer() {
  const events = await listEventsAction()

  return <EventsView initialEvents={events} />
}
