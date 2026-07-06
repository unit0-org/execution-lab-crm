import { SavedCheck } from '@/ui/atoms/SavedCheck'

// A field's label text with a transient "saved" check after autosave. Pass
// as the label node to TextField or TextArea.
export function FieldTitle({ label, saved }) {
  return (
    <>
      {label} <SavedCheck show={saved} />
    </>
  )
}
