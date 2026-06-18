import { color } from '../tokens/color'
import { space } from '../tokens/space'

export const stickyBarStyle = (active) => ({
  position: 'sticky',
  top: 'var(--topbar-height)',
  zIndex: 2,
  padding: `${space[3]} 0`,
  background: active ? color.bg.canvas : 'transparent',
  visibility: active ? 'visible' : 'hidden'
})
