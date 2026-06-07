import { rgb } from 'pdf-lib'

const channel = (value, shift) => ((value >> shift) & 255) / 255

// Convert a #rrggbb string to a pdf-lib rgb color (0..1 channels).
export const hex = (value) => {
  const n = parseInt(value.slice(1), 16)

  return rgb(channel(n, 16), channel(n, 8), channel(n, 0))
}

export const black = hex('#000000')
