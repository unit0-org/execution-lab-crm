import { space } from './tokens/space'
import { color } from './tokens/color'
import { font, fontSize, fontWeight } from './tokens/typography'

export const brandStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: space[2],
  padding: `${space[1]} ${space[2]}`,
  fontFamily: font.serif,
  fontSize: fontSize.lg,
  fontWeight: fontWeight.regular,
  color: color.text.primary,
  textDecoration: 'none',
}

export const brandMarkStyle = {
  width: 22,
  height: 22,
  borderRadius: '50%',
  background: color.accent.solid,
  flexShrink: 0,
}
