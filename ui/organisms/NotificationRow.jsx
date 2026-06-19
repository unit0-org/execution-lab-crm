import { MenuRow } from '../molecules/MenuRow'
import { mentionLabel } from './mentionLabel'

// One notification as a menu row linking to the exact note; marks itself
// read via onItem on click.
export function NotificationRow({ item, onItem }) {
  return (
    <MenuRow label={mentionLabel(item)} subtitle={item.snippet}
      onClick={() => onItem(item)} />
  )
}
