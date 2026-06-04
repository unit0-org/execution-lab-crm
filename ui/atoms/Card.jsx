import { cardStyle } from './Card.styles'

export function Card({ tone, children }) {
  return <div style={cardStyle(tone)}>{children}</div>
}
