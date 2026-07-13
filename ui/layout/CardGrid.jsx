import { cardGridStyle } from './CardGrid.styles'

/**
 * Responsive grid of cards: columns auto-fill to a minimum width, so a
 * short last row keeps card width instead of stretching. Pass
 * `align="start"` when cards differ in height (default stretches them
 * to equal heights).
 */
export function CardGrid({ children, align = 'stretch' }) {
  return <div style={cardGridStyle(align)}>{children}</div>
}
