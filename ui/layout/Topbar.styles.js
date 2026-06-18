import { color } from '../tokens/color'
import { space } from '../tokens/space'

export const topbarStyle = {
  position: 'sticky',
  top: 0,
  zIndex: 10,
  display: 'flex',
  alignItems: 'center',
  gap: space[2],
  height: 'var(--topbar-height)',
  background: color.bg.canvas,
  borderBottom: `1px solid ${color.border.default}`
}
