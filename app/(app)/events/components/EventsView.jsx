'use client'

import { useEvents } from '../hooks/useEvents'
import { EventsTable } from './EventsTable'

export function EventsView({ initialEvents, filter }) {
  const { events, reload } = useEvents(initialEvents, filter)

  return <EventsTable events={events} onChanged={reload} />
}
