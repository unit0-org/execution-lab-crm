import { cardStyle } from './Card.styles'

export function Card({ tone, hoverHost, id, children }) {
  const host = hoverHost || undefined

  return (
    <div id={id} data-hover-host={host} style={cardStyle(tone)}>
      {children}
    </div>
  )
}
