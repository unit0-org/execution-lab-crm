import { Children } from 'react'
import { rowStyle, growStyle } from './GrowRow.styles'

/** Row where the first child grows, the rest stay content-width. */
export function GrowRow({ align, children }) {
  const items = Children.toArray(children)

  return (
    <div style={rowStyle(align)}>
      <div style={growStyle}>{items[0]}</div>
      {items.slice(1)}
    </div>
  )
}
