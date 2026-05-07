import { space } from './tokens/space'
import { color } from './tokens/color'
import { shadow } from './tokens/shadow'

export const backdropStyle = {
  position: 'fixed', inset: 0,
  background: 'rgba(26, 25, 21, 0.18)',
  zIndex: 100,
  animation: 'fade var(--motion-soft) var(--motion-ease) both',
}

export const panelStyle = {
  position: 'fixed', top: 0, right: 0, bottom: 0,
  width: 'min(440px, 92vw)',
  background: color.bg.canvas,
  borderLeft: `1px solid ${color.border.default}`,
  padding: space[6],
  overflowY: 'auto',
  boxShadow: shadow.panel,
  zIndex: 101,
  animation: 'slideInRight var(--motion-soft) var(--motion-ease) both',
}
