import { MenuRow } from '../molecules/MenuRow'
import { IconButton } from '../atoms/IconButton'
import { Icon } from '../atoms/Icon'
import { GrowRow } from '../layout/GrowRow'
import { mentionLabel } from './mentionLabel'

// One notification: a menu row opening the exact note, plus a check that
// marks just this item read (its row drops, the panel stays open).
export function NotificationRow({ item, onItem, onMarkRead }) {
  return (
    <GrowRow>
      <MenuRow label={mentionLabel(item)} subtitle={item.snippet}
        onClick={() => onItem(item)} />
      <IconButton label="Mark as read" onClick={() => onMarkRead(item)}>
        <Icon name="check" />
      </IconButton>
    </GrowRow>
  )
}
