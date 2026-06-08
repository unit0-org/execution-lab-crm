'use client'

import { useEvents } from '../hooks/useEvents'
import { EventsTable } from './EventsTable'

export function EventsView({ initialEvents }) {
  const { events, reload } = useEvents(initialEvents)

  return <EventsTable events={events} onChanged={reload} />
}
