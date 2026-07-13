import { badgeStyle } from './Badge.styles'

/** Small static status/label pill. */
export function Badge({ tone = 'accent', children }) {
  return <span style={badgeStyle(tone)}>{children}</span>
}
