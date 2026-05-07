import { space } from './tokens/space'
import { color } from './tokens/color'
import { shadow } from './tokens/shadow'

export const backdropStyle = {
  position: 'fixed',
  inset: 0,
  background: 'rgba(26, 25, 21, 0.32)',
  zIndex: 100,
}

export const panelStyle = {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  width: 'min(420px, 95vw)',
  background: color.bg.surface,
  borderLeft: `1px solid ${color.border.default}`,
  padding: space[6],
  overflowY: 'auto',
  boxShadow: shadow.md,
  zIndex: 101,
}
