import { iconButtonStyle } from '../atoms/IconButton.styles'
import { Icon } from '../atoms/Icon'

// An icon-sized file picker: a hidden CSV input behind an upload glyph.
export function IconUpload({ label, title, onPick }) {
  return (
    <label style={iconButtonStyle()} aria-label={label} title={title}>
      <Icon name="upload" size={16} />
      <input type="file" accept=".csv" onChange={onPick} hidden />
    </label>
  )
}
