import { Text } from '@/ui/atoms/Text'
import { AttendeeTable } from './AttendeeTable'

export function AttendeeBody({ attendees }) {
  if (!attendees.length) {
    return <Text tone="muted" size="sm">No attendees yet.</Text>
  }

  return <AttendeeTable attendees={attendees} />
}
