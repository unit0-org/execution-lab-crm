import { color } from '../tokens/color'

const border = (c) => `1px solid ${c}`

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
  danger: {
    background: color.bg.surface,
    color: color.status.errorText,
    border: border(color.border.default)
  }
}
