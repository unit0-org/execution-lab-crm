import { cardGridStyle } from './CardGrid.styles'

// A uniform, responsive grid of cards: columns auto-fill to a minimum
// width, so a short last row keeps card width instead of stretching.
export function CardGrid({ children }) {
  return <div style={cardGridStyle}>{children}</div>
}
