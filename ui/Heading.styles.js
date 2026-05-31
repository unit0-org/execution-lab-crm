import { space } from './tokens/space'
import { color } from './tokens/color'
import { font, fontWeight, lineHeight } from './tokens/typography'

const sizes = {
  1: {
    fontFamily: font.serif, fontSize: '34px', lineHeight: 1.1,
    fontWeight: fontWeight.regular, color: color.text.primary,
    letterSpacing: '-0.015em'
  },
  2: {
    fontFamily: font.serif, fontSize: '17px', letterSpacing: '-0.005em',
    fontWeight: fontWeight.medium, color: color.text.primary
  },
  3: {
    fontFamily: font.serif, fontSize: '15px', letterSpacing: '-0.005em',
    fontWeight: fontWeight.medium, color: color.text.secondary
  }
}

const gutters = { none: 0, sm: space[2], md: space[3], lg: space[8] }

export const headingStyle = (level = 1, gutter = 'md') => ({
  margin: 0,
  marginBottom: gutters[gutter],
  lineHeight: lineHeight.tight,
  ...sizes[level]
})
