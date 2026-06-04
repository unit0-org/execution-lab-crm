import { Badge } from './Badge'
import { toggleBadgeStyle } from './ToggleBadge.styles'

// A Badge that acts as a button — a clickable status pill.
export function ToggleBadge({ tone, onClick, label, children }) {
  return (
    <button type="button" onClick={onClick} aria-label={label}
      style={toggleBadgeStyle}>
      <Badge tone={tone}>{children}</Badge>
    </button>
  )
}
