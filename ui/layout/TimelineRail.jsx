import { Children } from 'react'
import { railStyle, itemStyle, markerStyle, dotStyle }
  from './TimelineRail.styles'
import { Connector } from './Connector'

/** Vertical timeline rail: a dotted line links each item's dot to the next. */
export function TimelineRail({ children }) {
  const items = Children.toArray(children)
  const last = items.length - 1

  return (
    <div style={railStyle}>
      {items.map((item, i) => (
        <div key={i} style={itemStyle}>
          <span style={markerStyle}>
            <Connector show={i < last} />
            <span style={dotStyle} />
          </span>
          {item}
        </div>
      ))}
    </div>
  )
}
