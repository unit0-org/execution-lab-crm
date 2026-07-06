import { Text } from '@/ui/atoms/Text'
import { AttendeeTable } from './AttendeeTable'

export function AttendeeBody({ attendees, onChanged }) {
  if (!attendees.length) {
    return <Text tone="muted" size="sm">No attendees to show.</Text>
  }

  return <AttendeeTable attendees={attendees} onChanged={onChanged} />
}
