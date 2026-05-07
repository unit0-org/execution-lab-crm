import { space } from './tokens/space'
import { color } from './tokens/color'
import { radius } from './tokens/radius'
import { font } from './tokens/typography'

export const cardStyle = {
  padding: space[8],
  borderRadius: radius.xl,
  background: `linear-gradient(180deg, ${color.accent.tint} 0%, ${color.bg.surface} 100%)`,
  border: `1px solid ${color.border.default}`,
  marginBottom: space[6],
}

export const eyebrowStyle = {
  fontSize: '11.5px',
  color: color.accent.deep,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  marginBottom: space[2],
}

export const bodyStyle = {
  fontFamily: font.serif,
  fontSize: '22px',
  lineHeight: 1.35,
  letterSpacing: '-0.01em',
  color: color.text.primary,
  maxWidth: '64ch',
  margin: 0,
}
