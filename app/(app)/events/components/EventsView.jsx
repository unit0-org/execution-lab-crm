'use client'

import { useRowSelection } from '@/ui/molecules/useRowSelection'
import { useEvents } from '../hooks/useEvents'
import { EventsBulkBar } from './EventsBulkBar'
import { EventsTable } from './EventsTable'

// Selection spans the whole filtered list, not just the visible page, so
// "select all" means the events the current filter describes — filter to
// what you want gone, select all, delete.
export function EventsView({ initialEvents, filter }) {
  const { events, reload } = useEvents(initialEvents, filter)
  const selection = useRowSelection(events)

  return (
    <>
      <EventsBulkBar selection={selection} onChanged={reload} />
      <EventsTable events={events} selection={selection} onChanged={reload} />
    </>
  )
}
