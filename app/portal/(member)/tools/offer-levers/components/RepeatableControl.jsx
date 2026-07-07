import { Stack } from '@/ui/layout/Stack'
import { TextField } from '@/ui/atoms/TextField'
import { TextArea } from '@/ui/atoms/TextArea'
import { SavedCheck } from '@/ui/atoms/SavedCheck'
import { ActiveToggle } from './ActiveToggle'

// A repeatable row's control: a line-break-preserving textarea (with an
// active toggle) for 'area' fields, else a single-line field + saved check.
export function RepeatableControl({ field, item, onUpdate, onActive, saved }) {
  const flip = (active) => onActive(field.inputType, item.id, active)

  if (field.type === 'area') {
    return (
      <Stack gap="xs">
        <TextArea value={item.value} onChange={onUpdate} rows={5}
          placeholder={field.placeholder} />
        <ActiveToggle checked={!!item.active} onChange={flip} />
      </Stack>
    )
  }

  return (
    <TextField value={item.value} onChange={onUpdate}
      placeholder={field.placeholder} saved={saved}
      trailing={<SavedCheck show={saved} />} />
  )
}
