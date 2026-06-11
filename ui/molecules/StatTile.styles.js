import { color } from '../tokens/color'
import { radius } from '../tokens/radius'
import { space } from '../tokens/space'
import { font, fontWeight } from '../tokens/typography'

const TONES = {
  cold: color.warmth.cold, cool: color.warmth.cool,
  accent: color.accent.solid, wave: color.warmth.wave
}

export const tileStyle = {
  background: color.bg.surface,
  border: `1px solid ${color.border.default}`,
  borderRadius: radius.lg,
  padding: `${space[4]} ${space[3]}`,
  textAlign: 'center'
}

export const valueStyle = (tone) => ({
  fontFamily: font.sans, fontWeight: fontWeight.black,
  fontSize: '30px', lineHeight: 1, color: TONES[tone] || color.warmth.cold
})

export const labelStyle = {
  fontFamily: font.mono, fontSize: '10px', fontWeight: fontWeight.bold,
  letterSpacing: '0.1em', textTransform: 'uppercase',
  color: color.text.muted, marginTop: space[2]
}
