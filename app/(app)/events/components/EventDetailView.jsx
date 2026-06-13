'use client'

import { useEvent } from '../hooks/useEvent'
import { EventDetail } from './EventDetail'
import { EventNotFound } from './EventNotFound'

export function EventDetailView({ initialEvent, attendees }) {
  const seed = initialEvent
  const { event, refresh } = useEvent(seed?.id, seed)

  if (event === null) return <EventNotFound />

  return (
    <EventDetail event={event} onChanged={refresh}
      attendees={attendees} />
  )
}
