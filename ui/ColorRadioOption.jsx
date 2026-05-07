import { ColorDot } from './ColorDot'
import { colorRadioStyle } from './ColorRadioOption.styles'

// Radio input + color swatch. Used by both label and contact-type
// color pickers — same UX, same styling.
export function ColorRadioOption({ name = 'color', color, checked }) {
  return (
    <label style={colorRadioStyle}>
      <input type="radio" name={name} value={color} defaultChecked={checked} />
      <ColorDot color={color} size="md" />
    </label>
  )
}
