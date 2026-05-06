import { space } from './tokens/space'
import { color } from './tokens/color'
import { radius } from './tokens/radius'
import { fontSize } from './tokens/typography'

export const inputStyle = {
  padding: `${space[2]} ${space[3]}`,
  border: `1px solid ${color.border.strong}`,
  borderRadius: radius.sm,
  fontSize: fontSize.sm,
  background: color.bg.surface,
  color: color.text.primary,
  font: 'inherit',
  width: '100%',
  boxSizing: 'border-box',
  transition: 'border-color 120ms ease',
}
