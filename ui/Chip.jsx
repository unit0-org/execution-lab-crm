import { ColorDot } from './ColorDot'
import { chipStyle } from './Chip.styles'

export function Chip({ color, tone, dot, children }) {
  return (
    <span style={chipStyle(color, tone)}>
      {dot && color ? <ColorDot color={color} size="sm" /> : null}
      {children}
    </span>
  )
}
