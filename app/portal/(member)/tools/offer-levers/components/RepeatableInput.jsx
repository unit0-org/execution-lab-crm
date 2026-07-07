import { GrowRow } from '@/ui/layout/GrowRow'
import { TextField } from '@/ui/atoms/TextField'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { SavedCheck } from '@/ui/atoms/SavedCheck'

// One added input for a repeatable type: a text field, a saved check and a
// remove button. The type's label sits above the group (RepeatableInputs).
export function RepeatableInput({ field, item, saved, onUpdate, onRemove }) {
  return (
    <GrowRow align="start">
      <TextField value={item.value} onChange={onUpdate}
        placeholder={field.placeholder} />
      <SavedCheck show={saved} />
      <IconButton label="Remove input" onClick={onRemove}>
        <Icon name="trash" size={16} />
      </IconButton>
    </GrowRow>
  )
}
