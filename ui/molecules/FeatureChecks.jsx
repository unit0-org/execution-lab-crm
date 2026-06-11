import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { rowStyle, itemStyle, checkStyle } from './FeatureChecks.styles'

// A list of mono "✓ item" highlights — a wrapped row, or a column.
export function FeatureChecks({ items, column }) {
  return (
    <div style={rowStyle(column)}>
      {items.map((item) => (
        <span key={item} style={itemStyle}>
          <span style={checkStyle}>✓</span>
          <MonoLabel size={11}>{item}</MonoLabel>
        </span>
      ))}
    </div>
  )
}
