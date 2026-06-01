import { badgeStyle } from './Badge.styles'

export function Badge({ tone = 'accent', children }) {
  return <span style={badgeStyle(tone)}>{children}</span>
}
