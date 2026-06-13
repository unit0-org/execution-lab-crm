import { Icon } from '../atoms/Icon'
import { triggerStyle, textStyle, kbdStyle } from './SearchTrigger.styles'

// A search-field-shaped button that opens the command palette: a
// magnifier, muted placeholder, and a keyboard-shortcut hint chip.
export function SearchTrigger({ placeholder, hint, onClick }) {
  return (
    <button type="button" onClick={onClick} style={triggerStyle}>
      <Icon name="search" size={16} />
      <span style={textStyle}>{placeholder}</span>
      <span style={kbdStyle}>{hint}</span>
    </button>
  )
}
