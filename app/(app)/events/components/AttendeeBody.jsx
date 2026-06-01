import { Text } from '@/ui/atoms/Text'
import { AttendeeTable } from './AttendeeTable'
import { AttendeeSkeleton } from './AttendeeSkeleton'

export function AttendeeBody({ attendees }) {
  if (attendees === undefined) return <AttendeeSkeleton />

  if (!attendees.length) {
    return <Text tone="muted" size="sm">No attendees yet.</Text>
  }

  return <AttendeeTable attendees={attendees} />
}
