import { Stack } from '@/ui/layout/Stack'
import { EventHeader } from './EventHeader'
import { EventInfo } from './EventInfo'
import { EventStats } from './EventStats'
import { AttendeeList } from './AttendeeList'

export function EventDetail({ event, onChanged, attendees }) {
  return (
    <Stack gap="lg">
      <EventHeader event={event} onChanged={onChanged} />
      <EventInfo event={event} />
      <EventStats event={event} />
      <AttendeeList eventId={event.id} attendees={attendees}
        onChanged={onChanged} />
    </Stack>
  )
}
