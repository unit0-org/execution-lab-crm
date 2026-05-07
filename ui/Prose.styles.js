import { space } from './tokens/space'
import { color } from './tokens/color'
import { radius } from './tokens/radius'
import { font, fontSize, lineHeight } from './tokens/typography'

const variants = {
  briefing: {
    padding: `${space[4]} ${space[5]}`,
    borderRadius: radius.lg,
    background: color.bg.surface,
    border: `1px solid ${color.border.default}`,
    fontFamily: font.serif,
    fontSize: fontSize.lg,
    lineHeight: lineHeight.relaxed,
  },
  body: {
    fontFamily: font.sans,
    fontSize: fontSize.md,
    lineHeight: lineHeight.normal,
  },
}

export const proseStyle = (variant = 'body') => ({
  margin: 0,
  color: color.text.primary,
  ...variants[variant],
})
