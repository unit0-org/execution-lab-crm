import { fieldStyle } from './Field.styles'
import { FieldLabelRow } from './FieldLabelRow'
import { FieldError } from '@/ui/atoms/FieldError'

// A portal form field: a mono label row over its control, with an
// inline error slot beneath.
export function Field({ label, required, hint, error, children }) {
  return (
    <div style={fieldStyle}>
      <FieldLabelRow label={label} required={required} hint={hint} />
      {children}
      <FieldError message={error} />
    </div>
  )
}
