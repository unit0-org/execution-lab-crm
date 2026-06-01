import { space } from '../tokens/space'
import { color } from '../tokens/color'

export const sidebarStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%'
}

export const footerStyle = {
  padding: space[4],
  borderTop: `1px solid ${color.border.default}`
}
