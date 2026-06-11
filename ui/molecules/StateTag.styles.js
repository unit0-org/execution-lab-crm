import { font, fontWeight } from '../tokens/typography'
import { color } from '../tokens/color'

const COLORS = {
  launch: color.warmth.cool, open: color.accent.solid,
  wave: color.warmth.wave, waitlist: color.warmth.cold,
  confirmed: color.warmth.cool,
  full: color.text.subtle, soon: color.text.subtle,
  closed: color.text.subtle
}

const DOTS = new Set(['launch', 'open', 'wave', 'confirmed'])

export const stateDotColor = (state) => COLORS[state]
export const stateHasDot = (state) => DOTS.has(state)

export const stateTagStyle = (state, size = 11) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '7px',
  fontFamily: font.mono,
  fontSize: `${size}px`,
  fontWeight: fontWeight.bold,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: COLORS[state]
})
