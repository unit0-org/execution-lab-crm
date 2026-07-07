import { color } from '../tokens/color'
import { radius } from '../tokens/radius'

const tones = {
  default: color.text.muted,
  primary: color.accent.solid,
  danger: color.status.errorText
}

export const iconButtonStyle = (tone = 'default', size = 32) => ({
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  width: size, height: size, padding: 0, flexShrink: 0,
  background: 'none', border: 'none', borderRadius: radius.sm,
  color: tones[tone], cursor: 'pointer'
})
