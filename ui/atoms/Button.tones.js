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
  // `outline` colours the text with the colour it is given, so it only
  // works for an accent. Quiet wants a soft BORDER, not soft text: given
  // a border token it painted the label at 12% opacity, which read as a
  // disabled button ("Not duplicates" looked dead). Border stays subtle,
  // the label stays legible.
  quiet: {
    background: 'transparent',
    color: color.text.secondary,
    border: border(color.border.default)
  },
  primaryOutline: outline(color.accent.solid),
  launchOutline: outline(color.warmth.cool),
  waveOutline: outline(color.warmth.wave),
  danger: {
    background: color.bg.surface,
    color: color.status.errorText,
    border: border(color.border.default)
  }
}
