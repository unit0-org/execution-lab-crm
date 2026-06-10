import { RequiredMark } from './RequiredMark'

// A field's label, with a trailing asterisk when the field is required.
export function FieldLabel({ label, required }) {
  if (!required) return label

  return (
    <>
      {label} <RequiredMark />
    </>
  )
}
