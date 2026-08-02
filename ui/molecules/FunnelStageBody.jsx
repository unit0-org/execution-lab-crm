import { Card } from '../atoms/Card'
import { statLabel, statValue } from './Stat.styles'
import { stageCaption } from './FunnelFlow.styles'

function Caption({ children }) {
  if (!children) return null

  return <div style={stageCaption}>{children}</div>
}

// The stage's surface. Shares Stat's label and value treatment on
// purpose: a funnel stage and a KPI tile are the same kind of number and
// must read identically.
export function FunnelStageBody({ label, value, caption, tone }) {
  return (
    <Card tone={tone}>
      <div style={statLabel}>{label}</div>
      <div style={statValue(tone)}>{value}</div>
      <Caption>{caption}</Caption>
    </Card>
  )
}
