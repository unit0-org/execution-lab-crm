import { TextField } from '@/ui/atoms/TextField'
import { TextArea } from '@/ui/atoms/TextArea'
import { SavedCheck } from '@/ui/atoms/SavedCheck'

// A repeatable row's control: a line-break-preserving textarea for 'area'
// fields, otherwise a single-line field with a trailing saved check.
export function RepeatableControl({ field, item, saved, onUpdate }) {
  if (field.type === 'area') {
    return (
      <TextArea value={item.value} onChange={onUpdate} rows={5}
        placeholder={field.placeholder} />
    )
  }

  return (
    <TextField value={item.value} onChange={onUpdate}
      placeholder={field.placeholder} saved={saved}
      trailing={<SavedCheck show={saved} />} />
  )
}
