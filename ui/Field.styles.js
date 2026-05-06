import { space } from './tokens/space'
import { color } from './tokens/color'
import { fontSize, fontWeight } from './tokens/typography'

export const fieldStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: space[2],
}

export const labelStyle = {
  fontSize: fontSize.xs,
  color: color.text.muted,
  fontWeight: fontWeight.semibold,
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
}
