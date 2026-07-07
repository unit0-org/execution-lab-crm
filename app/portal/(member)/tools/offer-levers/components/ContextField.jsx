import { TextField } from '@/ui/atoms/TextField'
import { TextArea } from '@/ui/atoms/TextArea'
import { SavedCheck } from '@/ui/atoms/SavedCheck'
import { fieldLabel } from '../fieldLabel'

// One single-valued offer-context input, with the saved check inside the
// field (trailing) and a required mark beside the label.
export function ContextField({ field, value, onChange, saved }) {
  const props = {
    label: fieldLabel(field), value, onChange,
    required: field.required, placeholder: field.placeholder,
    trailing: <SavedCheck show={saved} />
  }

  if (field.type === 'area') return <TextArea {...props} />

  return <TextField {...props} />
}
