import { editableTextStyle } from './EditableText.styles'

/**
 * View-mode text that opens an editor on click: left-aligned and
 * input-sized, so the `TextField` swaps in with no layout shift.
 */
export function EditableText({ value, onClick }) {
  return (
    <button
      type="button"
      data-editable
      onClick={onClick}
      style={editableTextStyle}
    >
      {value}
    </button>
  )
}
