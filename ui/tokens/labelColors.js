// Label palette: each key maps to a solid (dot/text) + soft (pill bg) pair.
// Stored on a label as its `color`; null/unknown falls back to blue.
const pair = (key) => ({
  dot: `var(--label-${key})`,
  text: `var(--label-${key})`,
  soft: `var(--label-${key}-bg)`
})

export const LABEL_COLOR_KEYS = [
  'blue', 'green', 'cyan', 'amber', 'pink', 'purple', 'red', 'gray'
]

export const labelColors = Object.fromEntries(
  LABEL_COLOR_KEYS.map((key) => [key, pair(key)])
)

export const colorOf = (key) => labelColors[key] || labelColors.blue
