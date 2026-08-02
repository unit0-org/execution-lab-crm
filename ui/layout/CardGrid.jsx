import { cardGridStyle } from './CardGrid.styles'

/**
 * Responsive grid of cards: columns auto-fill to a minimum width, so a
 * short last row keeps card width instead of stretching. Pass
 * `align="start"` when cards differ in height (default stretches them
 * to equal heights), a smaller `min` for a row of compact tiles (e.g.
 * stats) that should stay on one line rather than wrap, and `fit` when
 * the row is a fixed set that should span the full width — without it a
 * row of five leaves the leftover column tracks empty on the right.
 */
export function CardGrid(props) {
  const { children, align = 'stretch', min = 240, fit } = props

  return <div style={cardGridStyle(align, min, fit)}>{children}</div>
}
