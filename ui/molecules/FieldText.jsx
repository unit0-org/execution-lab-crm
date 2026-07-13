import { Field } from './Field'
import { FieldInput } from '@/ui/atoms/FieldInput'

/** Portal labelled text input (`Field` + `FieldInput`). */
export function FieldText({ label, hint, required, ...rest }) {
  return (
    <Field label={label} required={required} hint={hint}>
      <FieldInput required={required} {...rest} />
    </Field>
  )
}
