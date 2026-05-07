import { ResourceKindGlyph } from './ResourceKindGlyph'
import { rowStyle, linkStyle, noteStyle } from './ResourceRow.styles'
import { RemoveResourceForm } from './RemoveResourceForm'

export function ResourceRow({ contactId, resource }) {
  return (
    <div style={rowStyle}>
      <ResourceKindGlyph kind={resource.kind} />
      <div>
        <a href={resource.url} target="_blank" rel="noreferrer" style={linkStyle}>
          {resource.label || resource.url}
        </a>
        {resource.note && <div style={noteStyle}>{resource.note}</div>}
      </div>
      <RemoveResourceForm contactId={contactId} resourceId={resource.id} />
    </div>
  )
}
