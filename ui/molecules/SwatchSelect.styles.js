import { space } from '../tokens/space'
import { color } from '../tokens/color'
import { radius } from '../tokens/radius'

export const triggerStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: space[2],
  padding: `${space[1]} ${space[2]}`,
  cursor: 'pointer',
  background: color.bg.sunken,
  color: color.text.muted,
  border: `1px solid ${color.border.default}`,
  borderRadius: radius.md
}
