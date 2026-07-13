import { previewStyle } from './Collapsible.styles'

// The collapsed-only body: a short summary of what expanding reveals.
// globals.css hides it once the panel is open.
export function CollapsiblePreview({ preview }) {
  if (!preview) return null

  return <div data-collapsible-preview style={previewStyle}>{preview}</div>
}
