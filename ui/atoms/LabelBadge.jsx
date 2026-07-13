import { LabelDot } from './LabelDot'
import { labelBadgeStyle } from './LabelBadge.styles'
import { colorOf } from '../tokens/labelColors'

/** Colored contact-label chip: a pill with a dot + the label name. */
export function LabelBadge({ name, color }) {
  return (
    <span style={labelBadgeStyle(colorOf(color))}>
      <LabelDot color={color} />
      {name}
    </span>
  )
}
