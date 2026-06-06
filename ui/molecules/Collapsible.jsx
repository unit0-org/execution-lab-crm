import { Icon } from '../atoms/Icon'
import { summaryStyle, titleStyle, bodyStyle } from './Collapsible.styles'

// A titled card section that expands/collapses in place. Native
// <details> owns the open state — no JS, no wiring; open by default.
export function Collapsible({ title, children }) {
  return (
    <details open data-collapsible>
      <summary style={summaryStyle}>
        <span style={titleStyle}>{title}</span>
        <Icon name="chevron" size={16} />
      </summary>
      <div style={bodyStyle}>{children}</div>
    </details>
  )
}
