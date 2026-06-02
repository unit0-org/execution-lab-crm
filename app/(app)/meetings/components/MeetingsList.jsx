'use client'

import { MeetingsTable } from './MeetingsTable'
import { MeetingsSkeleton } from './MeetingsSkeleton'

export function MeetingsList({ loading, meetings }) {
  if (loading) return <MeetingsSkeleton />

  return <MeetingsTable meetings={meetings} />
}
