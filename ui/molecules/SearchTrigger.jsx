import { Icon } from '../atoms/Icon'
import { triggerStyle, textStyle, kbdStyle } from './SearchTrigger.styles'

/**
 * Search-field-shaped button — magnifier, muted placeholder, and a
 * key hint — that opens a command palette.
 */
export function SearchTrigger({ placeholder, hint, onClick }) {
  return (
    <button type="button" onClick={onClick} style={triggerStyle}>
      <Icon name="search" size={16} />
      <span style={textStyle}>{placeholder}</span>
      <span data-kbd-hint style={kbdStyle}>{hint}</span>
    </button>
  )
}
