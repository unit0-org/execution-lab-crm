import { Stack } from '@/ui/layout/Stack'
import { TimelineEntry } from './TimelineEntry'

export function TimelineList({ entries }) {
  return (
    <Stack gap="sm">
      {entries.map((entry) => (
        <TimelineEntry key={entry.id} entry={entry} />
      ))}
    </Stack>
  )
}
