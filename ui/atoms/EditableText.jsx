import { editableTextStyle } from './EditableText.styles'

// A left-aligned, input-sized clickable value: clicking it swaps to a
// TextField in the same place, with no layout shift.
export function EditableText({ value, onClick }) {
  return (
    <button type="button" onClick={onClick} style={editableTextStyle}>
      {value}
    </button>
  )
}
