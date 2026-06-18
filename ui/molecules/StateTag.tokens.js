import { color } from '../tokens/color'
import { radius } from '../tokens/radius'

const COLORS = {
  launch: color.warmth.cool, open: color.accent.solid,
  wave: color.warmth.wave, waitlist: color.warmth.cold,
  confirmed: color.warmth.cool,
  full: color.status.errorText, soon: color.text.subtle,
  closed: color.text.subtle
}

const DOTS = new Set(['launch', 'open', 'wave', 'confirmed'])

// Sold out reads as a hard stop, not a quiet caption: a filled red pill.
const FILLED = { full: color.status.errorBg }

export const stateColor = (state) => COLORS[state]
export const stateHasDot = (state) => DOTS.has(state)

export const statePill = (state) => (FILLED[state]
  ? { background: FILLED[state], padding: '4px 11px',
      borderRadius: radius.pill }
  : {})
