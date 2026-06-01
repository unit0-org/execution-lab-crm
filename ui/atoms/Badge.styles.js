import { space } from '../tokens/space'
import { radius } from '../tokens/radius'
import { color } from '../tokens/color'

export const badgeStyle = {
  display: 'inline-block',
  padding: `2px ${space[2]}`,
  borderRadius: radius.pill,
  background: color.accent.soft,
  color: color.accent.solid,
  fontSize: '11px',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  whiteSpace: 'nowrap'
}
