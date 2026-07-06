import { TextField } from '@/ui/atoms/TextField'
import { TextArea } from '@/ui/atoms/TextArea'
import { fieldLabel } from '../fieldLabel'
import { FieldTitle } from '@/ui/molecules/FieldTitle'

// One single-valued offer-context input (text or textarea), with a required
// mark and a saved checkmark in its label.
export function ContextField({ field, value, onChange, saved }) {
  const label = <FieldTitle label={fieldLabel(field)}
    required={field.required} saved={saved} />
  const props = { label, value, onChange,
    placeholder: field.placeholder }

  if (field.type === 'area') return <TextArea {...props} />

  return <TextField {...props} />
}
