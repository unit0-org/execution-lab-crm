import { space } from './tokens/space'
import { color } from './tokens/color'
import { radius } from './tokens/radius'
import { fontSize, fontWeight } from './tokens/typography'

const base = {
  display: 'inline-block',
  padding: `${space[1]} ${space[2]}`,
  borderRadius: radius.sm,
  fontSize: fontSize.sm,
  fontWeight: fontWeight.medium,
}

const tones = {
  success: { background: color.status.successBg, color: color.status.successText },
  error:   { background: color.status.errorBg,   color: color.status.errorText },
  neutral: { background: color.status.neutralBg, color: color.status.neutralText },
}

export const badgeStyle = (tone = 'neutral') => ({ ...base, ...tones[tone] })
