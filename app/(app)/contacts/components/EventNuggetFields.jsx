import { TextArea } from '@/ui/atoms/TextArea'
import { FieldLabel } from './FieldLabel'

// Editing a registration answer: show the shared question (locked) and
// let only the answer value change.
export function EventNuggetFields({ question, value }) {
  const valueText = value || ''

  return (
    <>
      <FieldLabel label={question} />
      <TextArea name="value" autoFocus defaultValue={valueText}
        placeholder="Value" required />
    </>
  )
}
