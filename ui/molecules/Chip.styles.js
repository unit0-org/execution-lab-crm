import { space } from '../tokens/space'
import { radius } from '../tokens/radius'
import { color } from '../tokens/color'

export const chipStyle = {
  display: 'inline-block',
  padding: `2px ${space[2]}`,
  borderRadius: radius.pill,
  background: color.bg.subtle,
  color: color.text.secondary,
  fontSize: '12px',
  fontWeight: 500,
  textDecoration: 'none',
  whiteSpace: 'nowrap'
}
