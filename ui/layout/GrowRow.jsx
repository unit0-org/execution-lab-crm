import { Children } from 'react'
import { rowStyle, growStyle } from './GrowRow.styles'

// A flex row whose first child grows and the rest stay at content width.
export function GrowRow({ align, children }) {
  const items = Children.toArray(children)

  return (
    <div style={rowStyle(align)}>
      <div style={growStyle}>{items[0]}</div>
      {items.slice(1)}
    </div>
  )
}
