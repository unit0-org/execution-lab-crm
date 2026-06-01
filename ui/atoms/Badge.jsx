import { badgeStyle } from './Badge.styles'

export function Badge({ children }) {
  return <span style={badgeStyle}>{children}</span>
}
