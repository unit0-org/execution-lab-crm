import { Badge } from '../atoms/Badge'
import { badgeWrapStyle } from './NotificationBell.styles'

// The unread count overlaid on the bell; nothing when there are none.
export function BellBadge({ count }) {
  if (!count) return null

  return (
    <span style={badgeWrapStyle}>
      <Badge tone="accent">{count}</Badge>
    </span>
  )
}
