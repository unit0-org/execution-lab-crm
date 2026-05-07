import { space } from './tokens/space'
import { color } from './tokens/color'
import { font, fontSize, fontWeight, lineHeight } from './tokens/typography'

// h1 + h2 use the editorial serif; h3 stays sans for better density in
// dense table sections / sidebars.
const sizes = {
  1: { fontFamily: font.serif, fontSize: '34px', fontWeight: fontWeight.regular, color: color.text.primary, letterSpacing: '-0.015em', lineHeight: 1.1 },
  2: { fontFamily: font.serif, fontSize: '17px', fontWeight: fontWeight.medium,  color: color.text.primary,   letterSpacing: '-0.005em' },
  3: { fontFamily: font.serif, fontSize: '15px', fontWeight: fontWeight.medium,  color: color.text.secondary, letterSpacing: '-0.005em' },
}

const gutters = { none: 0, sm: space[2], md: space[3], lg: space[8] }

export const headingStyle = (level = 1, gutter = 'md') => ({
  margin: 0,
  marginBottom: gutters[gutter],
  lineHeight: lineHeight.tight,
  ...sizes[level],
})
