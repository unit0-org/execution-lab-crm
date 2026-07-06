import { SavedCheck } from '@/ui/atoms/SavedCheck'
import { FieldLabel } from '@/ui/atoms/FieldLabel'

// A field's label with its required mark hugging the text, then a transient
// "saved" check after autosave. Pass as the label node to TextField/TextArea
// (don't also pass `required` there, or the mark renders twice).
export function FieldTitle({ label, required, saved }) {
  return (
    <>
      <FieldLabel label={label} required={required} />
      {' '}
      <SavedCheck show={saved} />
    </>
  )
}
