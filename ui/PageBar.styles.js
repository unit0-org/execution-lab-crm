import { space } from './tokens/space'
import { color } from './tokens/color'

export const pageBarStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: space[3],
  padding: `${space[3]} ${space[6]}`,
  borderBottom: `1px solid ${color.border.default}`,
  background: color.bg.canvas,
  position: 'sticky',
  top: 0,
  zIndex: 10,
}
