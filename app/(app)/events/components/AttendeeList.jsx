'use client'

import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { useAttendees } from '../hooks/useAttendees'
import { AttendeeBody } from './AttendeeBody'

export function AttendeeList({ eventId }) {
  const attendees = useAttendees(eventId)

  return (
    <Stack gap="sm">
      <Heading level={3}>Attendees</Heading>
      <AttendeeBody attendees={attendees} />
    </Stack>
  )
}
