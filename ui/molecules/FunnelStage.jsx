import { statLabel, statValue } from './Stat.styles'
import { stageStyle, stageCaption } from './FunnelFlow.styles'

function Caption({ children }) {
  if (!children) return null

  return <div style={stageCaption}>{children}</div>
}

// Shares Stat's label and value treatment on purpose: a funnel stage and
// a KPI tile are the same kind of number and must read identically.
export function FunnelStage({ label, value, caption, tone }) {
  return (
    <div style={stageStyle(tone)}>
      <div style={statLabel}>{label}</div>
      <div style={statValue(tone)}>{value}</div>
      <Caption>{caption}</Caption>
    </div>
  )
}
