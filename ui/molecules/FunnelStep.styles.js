import { color } from '../tokens/color'
import { space } from '../tokens/space'
import { font, fontSize, fontWeight } from '../tokens/typography'

// The arrow sits between two stages, centred, and never shrinks below
// its own width when the stages compete for room.
export const stepStyle = {
  display: 'flex',
  flex: '0 0 auto',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: space[1],
  padding: `0 ${space[1]}`,
  color: color.text.muted
}

export const stepValue = {
  fontFamily: font.mono,
  fontSize: fontSize.xs,
  fontWeight: fontWeight.semibold
}
