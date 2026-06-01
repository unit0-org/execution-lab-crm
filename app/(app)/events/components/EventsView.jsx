'use client'

import { useEvents } from '../hooks/useEvents'
import { EventsTable } from './EventsTable'
import { EventsSkeleton } from './EventsSkeleton'

export function EventsView() {
  const { events, loading, reload } = useEvents()

  if (loading) return <EventsSkeleton />

  return <EventsTable events={events} onChanged={reload} />
}
