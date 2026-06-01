import { space } from '../tokens/space'
import { radius } from '../tokens/radius'
import { color } from '../tokens/color'

const tones = {
  accent: [color.accent.soft, color.accent.solid],
  success: [color.status.successBg, color.status.successText],
  error: [color.status.errorBg, color.status.errorText],
  neutral: [color.status.neutralBg, color.status.neutralText]
}

export const badgeStyle = (tone = 'accent') => ({
  display: 'inline-block',
  padding: `2px ${space[2]}`,
  borderRadius: radius.pill,
  background: tones[tone][0],
  color: tones[tone][1],
  fontSize: '11px',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  whiteSpace: 'nowrap'
})
