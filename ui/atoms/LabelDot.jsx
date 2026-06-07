import { dotStyle } from './LabelDot.styles'
import { colorOf } from '../tokens/labelColors'

// A small colored dot for a label's palette key.
export function LabelDot({ color, size = 8 }) {
  return <span style={dotStyle(colorOf(color).dot, size)} />
}
