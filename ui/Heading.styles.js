import { space } from './tokens/space'
import { color } from './tokens/color'
import { font, fontSize, fontWeight, lineHeight } from './tokens/typography'

// h1 + h2 use the editorial serif; h3 stays sans for better density in
// dense table sections / sidebars.
const sizes = {
  1: { fontFamily: font.serif, fontSize: '1.75rem', fontWeight: fontWeight.regular, color: color.text.primary },
  2: { fontFamily: font.serif, fontSize: fontSize.lg, fontWeight: fontWeight.regular, color: color.text.primary },
  3: { fontFamily: font.sans,  fontSize: fontSize.md, fontWeight: fontWeight.medium,  color: color.text.secondary },
}

const gutters = { none: 0, sm: space[2], md: space[3], lg: space[8] }

export const headingStyle = (level = 1, gutter = 'md') => ({
  margin: 0,
  marginBottom: gutters[gutter],
  lineHeight: lineHeight.tight,
  ...sizes[level],
})
