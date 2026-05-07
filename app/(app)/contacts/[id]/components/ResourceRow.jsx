import { GridRow } from '@/ui/GridRow'
import { ExternalLink } from '@/ui/ExternalLink'
import { Text } from '@/ui/Text'
import { ResourceKindGlyph } from './ResourceKindGlyph'
import { RemoveResourceForm } from './RemoveResourceForm'

export function ResourceRow({ contactId, resource }) {
  return (
    <GridRow template="glyph-content-meta" align="start">
      <ResourceKindGlyph kind={resource.kind} />
      <div>
        <ExternalLink href={resource.url}>{resource.label || resource.url}</ExternalLink>
        {resource.note && <Text tone="muted" size="sm">{resource.note}</Text>}
      </div>
      <RemoveResourceForm contactId={contactId} resourceId={resource.id} />
    </GridRow>
  )
}
