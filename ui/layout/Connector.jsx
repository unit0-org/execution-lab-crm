import { lineStyle } from './TimelineRail.styles'

// A dotted vertical segment from one timeline dot down to the next.
export function Connector({ show }) {
  if (!show) return null

  return <span style={lineStyle} />
}
