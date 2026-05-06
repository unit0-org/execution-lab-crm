import { space } from './tokens/space'
import { color } from './tokens/color'
import { font, lineHeight } from './tokens/typography'

const base = {
  fontFamily: font.sans,
  padding: `0 ${space[6]}`,
  lineHeight: lineHeight.normal,
  color: color.text.primary,
}

const widths = {
  narrow: { maxWidth: 640, margin: `${space[16]} auto` },
  wide:   { maxWidth: 960, margin: `${space[12]} auto` },
}

export const pageStyle = (width = 'narrow') => ({ ...base, ...widths[width] })
