import { font, fontWeight } from '../tokens/typography'
import { color } from '../tokens/color'

const SIZES = { md: '40px', lg: '58px', xl: '52px' }

export const displayStyle = (size = 'md') => ({
  margin: 0,
  fontFamily: font.sans,
  fontWeight: fontWeight.black,
  fontSize: SIZES[size],
  lineHeight: 0.92,
  letterSpacing: '-0.015em',
  textTransform: 'uppercase',
  color: color.text.primary
})
