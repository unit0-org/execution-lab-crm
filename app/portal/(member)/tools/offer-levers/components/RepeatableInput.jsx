import { GrowRow } from '@/ui/layout/GrowRow'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { RepeatableControl } from './RepeatableControl'

// One added input for a repeatable type: its control (text field or textarea)
// with a remove button. Its label sits above the group.
export function RepeatableInput({ field, item, saved, onUpdate, onRemove }) {
  return (
    <GrowRow align="start">
      <RepeatableControl field={field} item={item} saved={saved}
        onUpdate={onUpdate} />
      <IconButton label="Remove input" onClick={onRemove}>
        <Icon name="trash" size={16} />
      </IconButton>
    </GrowRow>
  )
}
