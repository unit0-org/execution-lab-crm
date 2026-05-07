import { cardHeaderStyle } from './CardHeader.styles'

// Title + actions row inside a Card. Same shape used by integration
// cards, note rows, anything with leading title and trailing meta.
export function CardHeader({ title, actions }) {
  return (
    <div style={cardHeaderStyle}>
      {title}
      {actions}
    </div>
  )
}
