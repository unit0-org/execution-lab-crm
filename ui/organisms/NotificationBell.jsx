'use client'

import { Popover } from '../molecules/Popover'
import { BellButton } from './BellButton'
import { NotificationList } from './NotificationList'

// Topbar notification bell: an unread-badged button opening a panel of
// recent notifications. All data + handlers come in as props.
export function NotificationBell(props) {
  const { open, unread, items, onToggle, onClose } = props
  const trigger = <BellButton unread={unread} onClick={onToggle} />

  return (
    <Popover open={open} onClose={onClose} trigger={trigger} align="end">
      <NotificationList items={items} onItem={props.onItem}
        onMarkRead={props.onMarkRead} onMarkAll={props.onMarkAll} />
    </Popover>
  )
}
