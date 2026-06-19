import { IconButton } from '../atoms/IconButton'
import { Icon } from '../atoms/Icon'
import { BellBadge } from './BellBadge'
import { hostStyle } from './NotificationBell.styles'

// Bell icon button with an unread-count badge overlay.
export function BellButton({ unread, onClick }) {
  return (
    <span style={hostStyle}>
      <IconButton label="Notifications" onClick={onClick}>
        <Icon name="bell" size={18} />
      </IconButton>
      <BellBadge count={unread} />
    </span>
  )
}
