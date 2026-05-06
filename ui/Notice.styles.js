import { space } from './tokens/space'
import { color } from './tokens/color'
import { radius } from './tokens/radius'
import { fontSize } from './tokens/typography'

const base = {
  padding: `${space[2]} ${space[3]}`,
  borderRadius: radius.md,
  fontSize: fontSize.sm,
  marginBottom: space[4],
}

const tones = {
  success: { background: color.status.successBg, color: color.status.successText },
  error:   { background: color.status.errorBg,   color: color.status.errorText },
}

export const noticeStyle = (tone = 'success') => ({ ...base, ...tones[tone] })
