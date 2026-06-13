import { color } from '../tokens/color'
import { space } from '../tokens/space'

export const topbarStyle = {
  position: 'sticky',
  top: 0,
  zIndex: 10,
  paddingTop: space[3],
  paddingBottom: space[3],
  background: color.bg.canvas,
  borderBottom: `1px solid ${color.border.default}`
}
