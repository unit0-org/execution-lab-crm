import { fieldStyle } from './Field.styles'
import { FieldLabelRow } from './FieldLabelRow'
import { FieldError } from '@/ui/atoms/FieldError'

/**
 * Portal form field: mono label row (+ `*`/hint) over a control, with an
 * error slot beneath.
 */
export function Field({ label, required, hint, error, children }) {
  return (
    <div style={fieldStyle}>
      <FieldLabelRow label={label} required={required} hint={hint} />
      {children}
      <FieldError message={error} />
    </div>
  )
}
