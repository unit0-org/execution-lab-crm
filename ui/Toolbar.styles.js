import { space } from './tokens/space'
import { color } from './tokens/color'
import { radius } from './tokens/radius'

export const toolbarStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: space[4],
  padding: `${space[2]} ${space[3]}`,
  background: color.bg.subtle,
  border: `1px solid ${color.border.default}`,
  borderRadius: radius.md,
  marginBottom: space[3],
}
