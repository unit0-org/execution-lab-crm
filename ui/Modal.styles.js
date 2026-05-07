import { space } from './tokens/space'
import { color } from './tokens/color'
import { radius } from './tokens/radius'
import { shadow } from './tokens/shadow'

export const backdropStyle = {
  position: 'fixed',
  inset: 0,
  background: 'rgba(26, 25, 21, 0.32)',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  paddingTop: '8vh',
  zIndex: 100,
}

export const panelStyle = {
  background: color.bg.surface,
  border: `1px solid ${color.border.default}`,
  borderRadius: radius.lg,
  padding: space[6],
  width: 'min(640px, calc(100vw - 2rem))',
  boxShadow: shadow.md,
}
