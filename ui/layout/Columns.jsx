import { Children } from 'react'
import { rowStyle, colStyle } from './Columns.styles'

/**
 * Multi-column layout: equal-width columns that wrap to a single
 * column on narrow screens.
 */
export function Columns({ children }) {
  return (
    <div style={rowStyle}>
      {Children.map(children, (c) => <div style={colStyle}>{c}</div>)}
    </div>
  )
}
