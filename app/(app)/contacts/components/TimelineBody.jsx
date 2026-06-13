import { Text } from '@/ui/atoms/Text'
import { TimelineList } from './TimelineList'

export function TimelineBody({ entries }) {
  if (!entries.length) {
    return <Text tone="muted" size="sm">No activity yet.</Text>
  }

  return <TimelineList entries={entries} />
}
