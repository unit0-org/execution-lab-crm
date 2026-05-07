import { cardStyle } from './Card.styles'

// Paper card: hairline border, surface bg, padded. Used for
// integrations, notes, briefings — anywhere we'd reach for a panel.
export function Card({ tone, size, children }) {
  return <article style={cardStyle({ tone, size })}>{children}</article>
}
