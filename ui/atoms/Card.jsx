import { cardStyle } from './Card.styles'

export function Card({ children }) {
  return <div style={cardStyle}>{children}</div>
}
