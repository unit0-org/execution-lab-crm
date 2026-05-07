import { space } from './tokens/space'
import { color } from './tokens/color'
import { fontSize, fontWeight } from './tokens/typography'

export const groupStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: space[2],
}

export const groupLabelStyle = {
  padding: `0 ${space[3]}`,
  fontSize: fontSize.xs,
  fontWeight: fontWeight.medium,
  color: color.text.subtle,
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
}
