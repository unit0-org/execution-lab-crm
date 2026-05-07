import { Field } from '@/ui/Field'
import { Select } from '@/ui/Select'

const TYPES = [
  { value: 'note',                label: 'Note' },
  { value: 'met_in_person',       label: 'Met in person' },
  { value: 'meeting_call',        label: 'Meeting / call' },
  { value: 'follow_up_created',   label: 'Follow-up created' },
]

export function TypeField({ value, onChange }) {
  return (
    <Field htmlFor="type" label="Type">
      <Select id="type" name="type" value={value} onChange={onChange}>
        {TYPES.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
      </Select>
    </Field>
  )
}
