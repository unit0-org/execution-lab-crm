import { ColorDot } from './ColorDot'
import { chipStyle } from './Chip.styles'

export function Chip({ color, tone, children }) {
  return (
    <span style={chipStyle(color, tone)}>
      {color ? <ColorDot color={color} size="sm" /> : null}
      {children}
    </span>
  )
}
