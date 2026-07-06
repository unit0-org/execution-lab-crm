import { RequiredMark } from './RequiredMark'

// A field's label, with a trailing asterisk when the field is required.
// Kept in one inline span so the `*` stays beside the label (the field
// wrapper is a column flex — a bare fragment would drop it to its own row).
// Renders nothing for a label-less, non-required field so the wrapper's
// grid gap doesn't leave an empty row above the input.
export function FieldLabel({ label, required }) {
  if (!label && !required) return null

  if (!required) return <span>{label}</span>

  return (
    <span>{label} <RequiredMark /></span>
  )
}
