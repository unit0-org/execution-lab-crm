import { rgb } from 'pdf-lib'

const channel = (value, shift) => ((value >> shift) & 255) / 255

// Convert a #rrggbb string to a pdf-lib rgb color (0..1 channels).
const hex = (value) => {
  const n = parseInt(value.slice(1), 16)

  return rgb(channel(n, 16), channel(n, 8), channel(n, 0))
}

// Invoice palette derived from the app theme tokens.
export const palette = {
  accent: hex('#5e7cff'),
  ink: hex('#1d2a33'),
  muted: hex('#6b7785'),
  stripe: hex('#eef1ff'),
  white: hex('#ffffff')
}
