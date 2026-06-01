import { space } from '../tokens/space'
import { color } from '../tokens/color'
import { radius } from '../tokens/radius'

export const fieldStyle = {
  display: 'grid',
  gap: space[1],
  fontSize: '13px',
  color: color.text.secondary
}

export const inputStyle = {
  width: '100%',
  padding: `${space[2]} ${space[3]}`,
  border: `1px solid ${color.border.default}`,
  borderRadius: radius.md,
  background: color.bg.sunken,
  color: color.text.primary,
  font: 'inherit'
}
