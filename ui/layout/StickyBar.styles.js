import { color } from '../tokens/color'
import { space } from '../tokens/space'
import { entrance } from '../tokens/motion'

// The bar keeps its space when idle (hidden, not unmounted, so the list
// below never jumps) and rises in when a selection turns it on.
export const stickyBarStyle = (active) => ({
  position: 'sticky',
  top: 'var(--topbar-height)',
  zIndex: 2,
  padding: `${space[3]} 0`,
  background: active ? color.bg.canvas : 'transparent',
  visibility: active ? 'visible' : 'hidden',
  ...(active ? entrance('quietRise', 'quick') : null)
})
