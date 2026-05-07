import { space } from './tokens/space'
import { color } from './tokens/color'
import { fontSize, fontWeight, lineHeight } from './tokens/typography'

const sizes = {
  1: { fontSize: fontSize.xl, fontWeight: fontWeight.semibold, color: color.text.primary },
  2: { fontSize: fontSize.lg, fontWeight: fontWeight.medium, color: color.text.primary },
  3: { fontSize: fontSize.md, fontWeight: fontWeight.medium, color: color.text.secondary },
}

const gutters = { none: 0, sm: space[2], md: space[3], lg: space[8] }

export const headingStyle = (level = 1, gutter = 'md') => ({
  margin: 0,
  marginBottom: gutters[gutter],
  lineHeight: lineHeight.tight,
  ...sizes[level],
})
