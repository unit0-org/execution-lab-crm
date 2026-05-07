import { ColorDot } from '@/ui/ColorDot'
import { colorOptionStyle } from './ColorOption.styles'

export function ColorOption({ color, checked }) {
  return (
    <label style={colorOptionStyle}>
      <input type="radio" name="color" value={color} defaultChecked={checked} />
      <ColorDot color={color} size="md" />
    </label>
  )
}
