import { Badge } from './Badge'
import { toggleBadgeStyle } from './ToggleBadge.styles'

/** Clickable badge toggle — a `Badge` that acts as a button. */
export function ToggleBadge({ tone, onClick, label, children }) {
  return (
    <button type="button" onClick={onClick} aria-label={label}
      style={toggleBadgeStyle}>
      <Badge tone={tone}>{children}</Badge>
    </button>
  )
}
