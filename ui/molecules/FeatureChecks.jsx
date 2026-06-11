import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { rowStyle, itemStyle, checkStyle } from './FeatureChecks.styles'

// A wrapped row of mono "✓ item" highlights (hero feature list).
export function FeatureChecks({ items }) {
  return (
    <div style={rowStyle}>
      {items.map((item) => (
        <span key={item} style={itemStyle}>
          <span style={checkStyle}>✓</span>
          <MonoLabel size={11}>{item}</MonoLabel>
        </span>
      ))}
    </div>
  )
}
