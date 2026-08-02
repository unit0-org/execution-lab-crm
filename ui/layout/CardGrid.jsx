import { cardGridStyle } from './CardGrid.styles'

/**
 * Responsive grid of cards: columns auto-fill to a minimum width, so a
 * short last row keeps card width instead of stretching. Pass
 * `align="start"` when cards differ in height (default stretches them
 * to equal heights), and a smaller `min` for a row of compact tiles
 * (e.g. stats) that should stay on one line rather than wrap.
 */
export function CardGrid({ children, align = 'stretch', min = 240 }) {
  return <div style={cardGridStyle(align, min)}>{children}</div>
}
