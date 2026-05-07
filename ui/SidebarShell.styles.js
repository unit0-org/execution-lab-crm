import { space } from './tokens/space'
import { color } from './tokens/color'

export const sidebarShellStyle = {
  borderRight: `1px solid ${color.border.default}`,
  padding: `${space[6]} ${space[3]}`,
  display: 'flex',
  flexDirection: 'column',
  gap: space[8],
  position: 'sticky',
  top: 0,
  height: '100vh',
  background: color.bg.canvas,
}
