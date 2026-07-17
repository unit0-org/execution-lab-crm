import { Text } from '../atoms/Text'
import { NotificationRow } from './NotificationRow'

// The recent notifications, or a quiet empty state.
export function NotificationRows({ items, onItem, onMarkRead }) {
  if (items.length === 0)
    return <Text tone="muted" size="sm">No notifications yet.</Text>

  return items.map((item) => (
    <NotificationRow key={item.id} item={item} onItem={onItem}
      onMarkRead={onMarkRead} />
  ))
}
