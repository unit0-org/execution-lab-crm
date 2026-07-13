import { Card } from '../atoms/Card'
import { statLabel, statValue } from './Stat.styles'

/** Stat tile body: a small uppercase label over a coloured value. */
export function StatBody({ label, value, tone }) {
  return (
    <Card tone={tone}>
      <div style={statLabel}>{label}</div>
      <div style={statValue(tone)}>{value}</div>
    </Card>
  )
}
