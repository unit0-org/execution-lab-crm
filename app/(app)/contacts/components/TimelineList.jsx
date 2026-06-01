import { TimelineRail } from '@/ui/layout/TimelineRail'
import { TimelineEntry } from './TimelineEntry'

export function TimelineList({ entries }) {
  return (
    <TimelineRail>
      {entries.map((entry) => (
        <TimelineEntry key={entry.id} entry={entry} />
      ))}
    </TimelineRail>
  )
}
