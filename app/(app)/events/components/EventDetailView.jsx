'use client'

import { useEvent } from '../hooks/useEvent'
import { useAttendees } from '../hooks/useAttendees'
import { EventDetail } from './EventDetail'
import { EventNotFound } from './EventNotFound'

export function EventDetailView({ initialEvent, attendees }) {
  const seed = initialEvent
  const { event, refresh } = useEvent(seed?.id, seed)
  const list = useAttendees(seed?.id, attendees)
  const onChanged = () => { refresh(); list.refresh() }

  if (event === null) return <EventNotFound />

  return (
    <EventDetail event={event} attendees={list.attendees}
      onChanged={onChanged} />
  )
}
