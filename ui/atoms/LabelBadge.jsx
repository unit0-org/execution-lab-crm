import { LabelDot } from './LabelDot'
import { labelBadgeStyle } from './LabelBadge.styles'
import { colorOf } from '../tokens/labelColors'

// A colored pill (dot + name) for a label, used in the contacts table.
export function LabelBadge({ name, color }) {
  return (
    <span style={labelBadgeStyle(colorOf(color))}>
      <LabelDot color={color} />
      {name}
    </span>
  )
}
