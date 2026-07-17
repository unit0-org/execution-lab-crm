import { Stack } from '../layout/Stack'
import { MarkAllRead } from './MarkAllRead'
import { NotificationRows } from './NotificationRows'
import { panelWrapStyle } from './NotificationBell.styles'

// The bell panel: a "mark all read" header and the recent notifications.
export function NotificationList(props) {
  const { items, onItem, onMarkRead, onMarkAll } = props

  return (
    <div style={panelWrapStyle}>
      <Stack gap="xs">
        <MarkAllRead show={items.length > 0} onClick={onMarkAll} />
        <NotificationRows items={items} onItem={onItem}
          onMarkRead={onMarkRead} />
      </Stack>
    </div>
  )
}
