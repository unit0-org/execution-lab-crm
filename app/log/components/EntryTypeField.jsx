import { Field } from '@/ui/Field'
import { Select } from '@/ui/Select'
import { MANUAL_ENTRY_TYPES } from '@/lib/timeline/manualEntryTypes'

export function EntryTypeField() {
  return (
    <Field htmlFor="entry_type" label="Type">
      <Select id="entry_type" name="entry_type" required defaultValue="note">
        {MANUAL_ENTRY_TYPES.map((t) => (
          <option key={t.value} value={t.value}>{t.label}</option>
        ))}
      </Select>
    </Field>
  )
}
