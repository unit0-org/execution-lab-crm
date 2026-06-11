import { color } from '../tokens/color'
import { radius } from '../tokens/radius'
import { space } from '../tokens/space'
import { font } from '../tokens/typography'

export const fieldInputStyle = {
  width: '100%',
  boxSizing: 'border-box',
  background: color.bg.canvas,
  border: `1px solid ${color.border.default}`,
  borderRadius: radius.md,
  color: color.text.primary,
  fontFamily: font.sans,
  fontSize: '14px',
  padding: `${space[3]} ${space[4]}`,
  outline: 'none'
}
