import { SavedCheck } from './SavedCheck'

// A field's label text with a transient "saved" check after autosave. Used
// as the label node for both TextField and TextArea.
export function FieldTitle({ label, saved }) {
  return (
    <>
      {label} <SavedCheck show={saved} />
    </>
  )
}
