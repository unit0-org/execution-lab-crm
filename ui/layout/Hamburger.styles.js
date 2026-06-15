import { color } from '../tokens/color'
import { radius } from '../tokens/radius'

export const hamburgerStyle = {
  flexShrink: 0,
  padding: '8px 10px',
  fontSize: '18px',
  lineHeight: 1,
  background: color.bg.surface,
  color: color.text.primary,
  border: `1px solid ${color.border.default}`,
  borderRadius: radius.md,
  cursor: 'pointer'
}
