import { space } from './tokens/space'
import { color } from './tokens/color'
import { font, lineHeight } from './tokens/typography'

const base = {
  fontFamily: font.sans,
  padding: `${space[8]} ${space[8]} ${space[16]}`,
  lineHeight: lineHeight.normal,
  color: color.text.primary,
  margin: '0 auto',
  width: '100%',
  animation: 'quietRise 280ms var(--motion-ease) both',
}

const widths = { narrow: { maxWidth: 640 }, wide: { maxWidth: 1180 } }

export const pageStyle = (width = 'narrow') => ({ ...base, ...widths[width] })
