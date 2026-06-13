import { font, fontWeight } from '../tokens/typography'
import { color } from '../tokens/color'

const TONES = {
  muted: color.text.muted, subtle: color.text.subtle,
  primary: color.text.primary, accent: color.accent.solid,
  cool: color.warmth.cool, cold: color.warmth.cold,
  wave: color.warmth.wave, danger: color.status.errorText
}

const aligned = (align) => (align ? { display: 'block', textAlign: align } : {})

export const monoLabelStyle = (o = {}) => ({
  fontFamily: font.mono,
  fontSize: `${o.size || 11}px`,
  fontWeight: fontWeight.semibold,
  letterSpacing: '0.08em',
  color: TONES[o.tone || 'muted'],
  textTransform: o.caps ? 'uppercase' : 'none',
  ...aligned(o.align)
})
