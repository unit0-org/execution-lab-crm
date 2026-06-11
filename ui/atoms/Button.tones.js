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
  primary: {
    background: color.accent.solid,
    color: color.accent.text,
    border: border(color.accent.solid)
  },
  launch: fill(color.warmth.cool, color.ink),
  wave: fill(color.warmth.wave, color.ink),
  cyan: fill(color.warmth.cold, color.ink),
  waitlist: outline(color.warmth.cold),
  quiet: outline(color.border.default),
  danger: {
    background: color.bg.surface,
    color: color.status.errorText,
    border: border(color.border.default)
  }
}
