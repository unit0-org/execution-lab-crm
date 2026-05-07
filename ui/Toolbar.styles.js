import { space } from './tokens/space'
import { color } from './tokens/color'
import { radius } from './tokens/radius'
import { shadow } from './tokens/shadow'

const inlineStyle = {
  display: 'flex', alignItems: 'center', gap: space[4],
  padding: `${space[2]} ${space[3]}`,
  background: color.bg.subtle,
  border: `1px solid ${color.border.default}`,
  borderRadius: radius.md,
  marginBottom: space[3],
}

const floatingStyle = {
  position: 'fixed', left: '50%', bottom: 24, transform: 'translateX(-50%)',
  display: 'flex', alignItems: 'center', gap: space[4],
  padding: `${space[2]} ${space[4]}`,
  background: color.text.primary, color: color.bg.canvas,
  borderRadius: radius.pill, boxShadow: shadow.toast, zIndex: 200,
  animation: 'toastIn 280ms var(--motion-ease) both',
}

export const toolbarStyle = (variant = 'inline') =>
  variant === 'floating' ? floatingStyle : inlineStyle
