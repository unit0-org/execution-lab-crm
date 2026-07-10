import { cardGridStyle } from './CardGrid.styles'

// A uniform, responsive grid of cards: columns auto-fill to a minimum
// width, so a short last row keeps card width instead of stretching. Pass
// align="start" when cards can differ in height (e.g. expandable ones).
export function CardGrid({ children, align = 'stretch' }) {
  return <div style={cardGridStyle(align)}>{children}</div>
}
