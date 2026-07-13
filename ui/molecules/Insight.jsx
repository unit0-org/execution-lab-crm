import { Text } from '@/ui/atoms/Text'
import { insightStyle } from './Insight.styles'

/** Insight tile: system-derived, styled apart from manual nuggets. */
export function Insight({ label, value }) {
  return (
    <div style={insightStyle}>
      <Text size="sm" tone="muted">{label}</Text>
      <Text>{value}</Text>
    </div>
  )
}
