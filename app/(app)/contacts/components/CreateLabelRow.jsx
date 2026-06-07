import { TextButton } from '@/ui/atoms/TextButton'

// Inline "create" shown when the search names a label that doesn't exist.
export function CreateLabelRow({ show, name, onCreate }) {
  if (!show) return null

  return (
    <TextButton type="button" onClick={onCreate}>
      + Create “{name}”
    </TextButton>
  )
}
