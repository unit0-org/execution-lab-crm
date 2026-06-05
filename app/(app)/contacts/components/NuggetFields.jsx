import { TextField } from '@/ui/atoms/TextField'
import { TextArea } from '@/ui/atoms/TextArea'

export function NuggetFields({ label, value }) {
  const q = label || ''
  const v = value || ''

  return (
    <>
      <TextField name="label" autoFocus defaultValue={q}
        placeholder="Question or label (optional)" />
      <TextArea name="value" defaultValue={v}
        placeholder="Value" required />
    </>
  )
}
