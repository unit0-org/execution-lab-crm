import { color } from '../tokens/color'

const border = (c) => `1px solid ${c}`
const fill = (c, ink) => ({ background: c, color: ink, border: border(c) })
const outline = (c) => ({
  background: 'transparent', color: c, border: border(c)
})

export const tones = {
  default: {
    background: color.bg.surface,
    color: color.text.secondary,
    border: border(color.border.default)
  },
  primary: fill(color.accent.solid, color.accent.text),
  launch: fill(color.warmth.cool, color.onBrand),
  wave: fill(color.warmth.wave, color.onBrand),
  cyan: fill(color.warmth.cold, color.onBrand),
  waitlist: outline(color.warmth.cold),
  quiet: outline(color.border.default),
  primaryOutline: outline(color.accent.solid),
  launchOutline: outline(color.warmth.cool),
  waveOutline: outline(color.warmth.wave),
  danger: {
    background: color.bg.surface,
    color: color.status.errorText,
    border: border(color.border.default)
  }
}
