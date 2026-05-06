import { color } from './tokens/color'
import { fontWeight } from './tokens/typography'

export const appLinkStyle = {
  color: color.text.primary,
  textDecoration: 'none',
  borderBottom: `1px solid ${color.border.strong}`,
  paddingBottom: 1,
  fontWeight: fontWeight.medium,
}
