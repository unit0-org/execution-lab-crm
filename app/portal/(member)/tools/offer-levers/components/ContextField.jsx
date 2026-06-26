import { TextField } from '@/ui/atoms/TextField'
import { TextArea } from '@/ui/atoms/TextArea'
import { fieldLabel } from '../fieldLabel'

// One offer-context input — a textarea for long answers, else a text field.
export function ContextField({ field, value, onChange }) {
  if (field.type === 'area')
    return (
      <TextArea label={fieldLabel(field)} value={value} onChange={onChange}
        placeholder={field.placeholder} />
    )

  return (
    <TextField label={fieldLabel(field)} value={value} onChange={onChange}
      placeholder={field.placeholder} />
  )
}
