import { Field } from './Field'
import { FieldInput } from '@/ui/atoms/FieldInput'

// The common case: a labelled portal text input in one tag.
export function FieldText({ label, hint, required, ...rest }) {
  return (
    <Field label={label} required={required} hint={hint}>
      <FieldInput required={required} {...rest} />
    </Field>
  )
}
