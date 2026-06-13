import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { AttendeeBody } from './AttendeeBody'

export function AttendeeList({ attendees }) {
  return (
    <Stack gap="sm">
      <Heading level={3}>Attendees</Heading>
      <AttendeeBody attendees={attendees} />
    </Stack>
  )
}
