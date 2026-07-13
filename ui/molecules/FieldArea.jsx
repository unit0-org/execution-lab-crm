import { Field } from './Field'
import { FieldTextArea } from '@/ui/atoms/FieldTextArea'

/** Portal labelled textarea (`Field` + `FieldTextArea`). */
export function FieldArea({ label, hint, required, ...rest }) {
  return (
    <Field label={label} required={required} hint={hint}>
      <FieldTextArea required={required} {...rest} />
    </Field>
  )
}
