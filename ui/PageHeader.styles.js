import { space } from './tokens/space'
import { color } from './tokens/color'

export const pageHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: space[8],
  paddingBottom: space[4],
  borderBottom: `1px solid ${color.border.default}`,
}
