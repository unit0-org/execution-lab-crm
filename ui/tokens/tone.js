import { color } from './color'

// Neon accent colour per card tone (Execution Lab design system).
export const toneColor = {
  accent: color.accent.solid,
  cool: color.warmth.cool,
  cold: color.warmth.cold,
  warm: color.warmth.warm
}

const label = (n) => `var(--label-${n})`

// Legible-on-surface value text per tone. The label palette flips to
// darkened solids on light and neon on dark, so it reads in both themes
// (raw neon brand accents fail contrast on the light surface).
export const toneTextColor = {
  accent: label('blue'),
  cool: label('green'),
  cold: label('cyan'),
  warm: label('amber')
}
