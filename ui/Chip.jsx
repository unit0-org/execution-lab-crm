import { ColorDot } from './ColorDot'
import { chipStyle } from './Chip.styles'

export function Chip({ color, children }) {
  return (
    <span style={chipStyle(color)}>
      <ColorDot color={color} size="sm" />
      {children}
    </span>
  )
}
