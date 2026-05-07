import { GridRow } from '@/ui/GridRow'
import { AppLink } from '@/ui/AppLink'
import { Text } from '@/ui/Text'
import { TimelineEntryGlyph } from '../../contacts/[id]/components/TimelineEntryGlyph'

export function ActivityRow({ entry }) {
  return (
    <GridRow template="glyph-content-meta">
      <TimelineEntryGlyph type={entry.entry_type} />
      <div>
        <AppLink href={`/contacts/${entry.contact_id}`}>
          {entry.contacts?.display_name || 'Unknown'}
        </AppLink>
        {entry.title && <Text tone="muted" size="sm">{entry.title}</Text>}
      </div>
      <Text tone="muted" size="sm">{new Date(entry.occurred_at).toLocaleDateString()}</Text>
    </GridRow>
  )
}
