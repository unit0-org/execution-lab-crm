import { color } from '../tokens/color'

const border = (c) => `1px solid ${c}`

export const tones = {
  default: {
    background: color.bg.surface,
    color: color.text.secondary,
    border: border(color.border.default)
  },
  primary: {
    background: color.text.primary,
    color: color.bg.canvas,
    border: border(color.text.primary)
  },
  danger: {
    background: color.bg.surface,
    color: color.status.errorText,
    border: border(color.border.default)
  }
}
