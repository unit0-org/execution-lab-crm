import { emptyStyle } from './BarChart.styles'

// Shown when the window holds no purchases; reserves the chart's height.
export function ChartEmpty() {
  return <div style={emptyStyle}>No purchases in this window</div>
}
