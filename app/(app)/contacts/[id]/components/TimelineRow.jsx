import { GridRow } from '@/ui/GridRow'
import { Text } from '@/ui/Text'
import { TimelineEntryGlyph } from './TimelineEntryGlyph'
import { TimelineDate } from './TimelineDate'

const fallbackTitle = (type) => type.replace(/_/g, ' ')

export function TimelineRow({ entry }) {
  return (
    <GridRow template="glyph-content-meta" align="start">
      <TimelineEntryGlyph type={entry.entry_type} />
      <div>
        <Text>{entry.title || fallbackTitle(entry.entry_type)}</Text>
        {entry.body && <Text tone="muted" size="sm">{entry.body}</Text>}
      </div>
      <TimelineDate iso={entry.occurred_at} />
    </GridRow>
  )
}
