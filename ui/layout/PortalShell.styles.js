import { color } from '../tokens/color'
import { space } from '../tokens/space'
import { font, lineHeight } from '../tokens/typography'

export const shellStyle = {
  minHeight: '100dvh',
  background: color.bg.canvas,
  fontFamily: font.sans,
  lineHeight: lineHeight.normal,
  color: color.text.primary
}

export const innerStyle = (max) => ({
  maxWidth: max,
  margin: '0 auto',
  padding: `${space[6]} ${space[6]} ${space[16]}`,
  width: '100%',
  boxSizing: 'border-box'
})
