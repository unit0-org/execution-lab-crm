import { TimelineEntryGlyph } from './TimelineEntryGlyph'
import { TimelineDate } from './TimelineDate'
import { rowStyle, titleStyle, bodyStyle } from './TimelineRow.styles'

const fallbackTitle = (type) => type.replace(/_/g, ' ')

export function TimelineRow({ entry }) {
  return (
    <div style={rowStyle}>
      <TimelineEntryGlyph type={entry.entry_type} />
      <div>
        <div style={titleStyle}>{entry.title || fallbackTitle(entry.entry_type)}</div>
        {entry.body && <div style={bodyStyle}>{entry.body}</div>}
      </div>
      <TimelineDate iso={entry.occurred_at} />
    </div>
  )
}
