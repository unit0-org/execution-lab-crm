import { AppLink } from '@/ui/AppLink'
import { Text } from '@/ui/Text'
import { TimelineEntryGlyph } from '../../contacts/[id]/components/TimelineEntryGlyph'
import { rowStyle } from './ActivityRow.styles'

export function ActivityRow({ entry }) {
  return (
    <div style={rowStyle}>
      <TimelineEntryGlyph type={entry.entry_type} />
      <div>
        <AppLink href={`/contacts/${entry.contact_id}`}>
          {entry.contacts?.display_name || 'Unknown'}
        </AppLink>
        {entry.title && <Text tone="muted" size="sm">{entry.title}</Text>}
      </div>
      <Text tone="muted" size="sm">{new Date(entry.occurred_at).toLocaleDateString()}</Text>
    </div>
  )
}
