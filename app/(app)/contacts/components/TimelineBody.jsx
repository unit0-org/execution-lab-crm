import { Text } from '@/ui/atoms/Text'
import { TimelineList } from './TimelineList'
import { TimelineSkeleton } from './TimelineSkeleton'

export function TimelineBody({ entries }) {
  if (entries === undefined) return <TimelineSkeleton />

  if (!entries.length) {
    return <Text tone="muted" size="sm">No activity yet.</Text>
  }

  return <TimelineList entries={entries} />
}
