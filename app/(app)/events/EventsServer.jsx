import { Stack } from '@/ui/layout/Stack'
import { listEventsAction } from './actions/listEvents'
import { listEventTypesAction } from './actions/listEventTypes'
import { EventFilters } from './components/EventFilters'
import { EventsView } from './components/EventsView'

// Server-side initial load for the events list, filtered by the URL so a
// link from the dashboard's Events tile lands on exactly the events that
// tile counted. The key remounts the view with fresh server data
// whenever the filter changes.
export async function EventsServer({ searchParams }) {
  const { period, type } = await searchParams
  const filter = { period: period || null, type: type || null }
  const [events, types] = await Promise.all([
    listEventsAction(filter), listEventTypesAction()
  ])

  return (
    <Stack gap="md">
      <EventFilters filter={filter} types={types} />
      <EventsView key={`${period}-${type}`} initialEvents={events}
        filter={filter} />
    </Stack>
  )
}
