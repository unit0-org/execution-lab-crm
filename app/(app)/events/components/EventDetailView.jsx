'use client'

import { useParams } from 'next/navigation'
import { useEvent } from '../hooks/useEvent'
import { EventDetail } from './EventDetail'
import { EventLoading } from './EventLoading'
import { EventNotFound } from './EventNotFound'

export function EventDetailView() {
  const { id } = useParams()
  const { event, refresh } = useEvent(id)

  if (event === undefined) return <EventLoading />

  if (event === null) return <EventNotFound />

  return <EventDetail event={event} onChanged={refresh} />
}
