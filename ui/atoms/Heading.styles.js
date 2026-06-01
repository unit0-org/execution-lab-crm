import { space } from '../tokens/space'
import { color } from '../tokens/color'
import { font, fontWeight, lineHeight } from '../tokens/typography'

const d = (size, weight, tracking, tone = 'primary') => ({
  fontFamily: font.sans,
  textTransform: 'uppercase',
  color: color.text[tone],
  fontSize: size,
  fontWeight: weight,
  letterSpacing: tracking
})

const sizes = {
  1: d('28px', fontWeight.black, '-0.01em'),
  2: d('18px', fontWeight.extrabold, '0.005em'),
  3: d('14px', fontWeight.bold, '0.04em', 'secondary')
}

const gutters = { none: 0, sm: space[2], md: space[3], lg: space[8] }

export const headingStyle = (level = 1, gutter = 'md') => ({
  margin: 0,
  marginBottom: gutters[gutter],
  lineHeight: lineHeight.tight,
  ...sizes[level]
})
