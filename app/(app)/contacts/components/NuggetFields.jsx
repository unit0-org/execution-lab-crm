import { TextField } from '@/ui/atoms/TextField'
import { TextArea } from '@/ui/atoms/TextArea'

export function NuggetFields({ label, value }) {
  const labelText = label || ''
  const valueText = value || ''

  return (
    <>
      <TextField name="label" autoFocus defaultValue={labelText}
        placeholder="Question or label (optional)" />
      <TextArea name="value" defaultValue={valueText}
        placeholder="Value" required />
    </>
  )
}
