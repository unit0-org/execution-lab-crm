import { moreStyle } from './CopyList.styles'

// Inline text button to expand/collapse a CopyList.
export function ToggleMore({ label, onClick }) {
  return (
    <button type="button" style={moreStyle} onClick={onClick}>
      {label}
    </button>
  )
}
