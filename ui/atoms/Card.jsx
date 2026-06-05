import { cardStyle } from './Card.styles'

export function Card({ tone, hoverHost, children }) {
  const host = hoverHost || undefined

  return (
    <div data-hover-host={host} style={cardStyle(tone)}>{children}</div>
  )
}
