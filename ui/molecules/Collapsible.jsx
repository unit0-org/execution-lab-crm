import { Icon } from '../atoms/Icon'
import { summaryStyle, rowStyle, titleStyle, previewStyle, bodyStyle }
  from './Collapsible.styles'

// A titled card section that expands/collapses in place. Native <details>
// owns the open state — no JS. Pass `preview` to show a summary line that's
// visible only while collapsed; defaultOpen={false} starts collapsed.
export function Collapsible({ title, preview, defaultOpen = true, children }) {
  const initial = defaultOpen ? { open: true } : {}
  const previewNode = preview
    ? <div data-collapsible-preview style={previewStyle}>{preview}</div>
    : null

  return (
    <details {...initial} data-collapsible>
      <summary style={summaryStyle}>
        <div style={rowStyle}>
          <span style={titleStyle}>{title}</span>
          <Icon name="chevron" size={16} />
        </div>
        {previewNode}
      </summary>
      <div style={bodyStyle}>{children}</div>
    </details>
  )
}
