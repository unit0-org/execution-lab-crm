import { Card } from '../atoms/Card'
import { statLabel, statValue } from './Stat.styles'
import { stageStyle, stageCaption } from './FunnelFlow.styles'

function Caption({ children }) {
  if (!children) return null

  return <div style={stageCaption}>{children}</div>
}

// A stage is a Card — same border, tone stripe, padding and hover — inside
// a flex wrapper that owns only the sizing. Shares Stat's label and value
// treatment on purpose: a stage and a KPI tile are the same kind of number
// and must read identically.
export function FunnelStage({ label, value, caption, tone }) {
  return (
    <div style={stageStyle}>
      <Card tone={tone}>
        <div style={statLabel}>{label}</div>
        <div style={statValue(tone)}>{value}</div>
        <Caption>{caption}</Caption>
      </Card>
    </div>
  )
}
