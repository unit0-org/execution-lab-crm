import { space } from './tokens/space'
import { color } from './tokens/color'
import { radius } from './tokens/radius'
import { font, fontSize, lineHeight } from './tokens/typography'

const variants = {
  briefing: {
    padding: space[8],
    borderRadius: radius.xl,
    background: `linear-gradient(180deg, ${color.accent.tint} 0%, ${color.bg.surface} 100%)`,
    border: `1px solid ${color.border.default}`,
    fontFamily: font.serif,
    fontSize: '22px',
    lineHeight: 1.35,
    letterSpacing: '-0.01em',
    maxWidth: '64ch',
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
