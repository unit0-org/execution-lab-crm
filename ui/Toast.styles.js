import { color } from './tokens/color'
import { radius } from './tokens/radius'
import { shadow } from './tokens/shadow'
import { space } from './tokens/space'

const tones = {
  success: { background: color.text.primary, color: color.bg.canvas },
  error:   { background: color.status.errorText, color: color.bg.canvas },
}

export const toastStyle = (tone = 'success') => ({
  ...tones[tone],
  padding: `${space[2]} ${space[4]}`,
  borderRadius: radius.pill,
  boxShadow: shadow.toast,
  fontSize: 13,
  pointerEvents: 'auto',
  animation: 'toastIn 280ms var(--motion-ease) both',
})
