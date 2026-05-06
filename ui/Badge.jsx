import { badgeStyle } from './Badge.styles'

export function Badge({ tone = 'neutral', children }) {
  return <span style={badgeStyle(tone)}>{children}</span>
}
