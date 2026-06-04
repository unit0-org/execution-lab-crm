import { space } from '../tokens/space'
import { radius } from '../tokens/radius'
import { color } from '../tokens/color'

export const toastStyle = {
  padding: `${space[2]} ${space[4]}`,
  borderRadius: radius.md,
  background: color.bg.surface,
  color: color.text.primary,
  border: `1px solid ${color.border.default}`,
  fontSize: '13px',
  animation: 'toastIn 200ms ease',
  pointerEvents: 'auto'
}
