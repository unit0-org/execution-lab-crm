import { LabelDot } from './LabelDot'
import { swatchStyle } from './ColorSwatch.styles'

// A pickable color dot; ringed when it's the chosen one.
export function ColorSwatch({ color, active, onPick }) {
  return (
    <button type="button" aria-label={color} style={swatchStyle(active)}
      onClick={() => onPick(color)}>
      <LabelDot color={color} size={14} />
    </button>
  )
}
