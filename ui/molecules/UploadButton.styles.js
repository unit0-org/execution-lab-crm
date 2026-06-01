import { space } from '../tokens/space'
import { radius } from '../tokens/radius'
import { color } from '../tokens/color'

export const uploadButtonStyle = {
  display: 'inline-block',
  padding: `${space[1]} ${space[3]}`,
  borderRadius: radius.sm,
  border: `1px solid ${color.border.default}`,
  color: color.text.secondary,
  fontSize: '11px',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  cursor: 'pointer'
}
