import { cardStyle } from './Card.styles'

/** Surface container for grouped content. */
export function Card({ tone, hoverHost, id, children }) {
  const host = hoverHost || undefined

  return (
    <div id={id} data-hover-host={host} data-hover-bg style={cardStyle(tone)}>
      {children}
    </div>
  )
}
