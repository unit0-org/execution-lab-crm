import { Icon } from '../atoms/Icon'
import { LabelDot } from '../atoms/LabelDot'
import { triggerStyle } from './SwatchSelect.styles'

// The current-color button that opens a SwatchSelect's swatch menu.
export function SwatchTrigger({ value, onClick }) {
  return (
    <button type="button" onClick={onClick} style={triggerStyle}>
      <LabelDot color={value} size={12} />
      <Icon name="chevron" size={14} />
    </button>
  )
}
