'use client'

import { MeetingsTable } from './MeetingsTable'

export function MeetingsList({ meetings, selection }) {
  return <MeetingsTable meetings={meetings} selection={selection} />
}
