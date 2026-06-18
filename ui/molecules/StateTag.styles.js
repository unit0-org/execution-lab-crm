import { font, fontWeight } from '../tokens/typography'
import { stateColor, statePill, stateHasDot } from './StateTag.tokens'

export { stateHasDot }
export const stateDotColor = stateColor

export const stateTagStyle = (state, size = 11) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '7px',
  fontFamily: font.mono,
  fontSize: `${size}px`,
  fontWeight: fontWeight.bold,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: stateColor(state),
  ...statePill(state)
})
