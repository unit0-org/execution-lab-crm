import { lineStyle } from './TimelineRail.styles'

/** Timeline connector: a dotted segment from one dot down to the next. */
export function Connector({ show }) {
  if (!show) return null

  return <span style={lineStyle} />
}
