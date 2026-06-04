import { wrapStyle, svgStyle } from './BarChart.styles'
import { CHART_HEIGHT, CHART_FOOTER } from './chartDims'
import { barGeometry } from './barGeometry'
import { ChartBar } from './ChartBar'
import { ChartEmpty } from './ChartEmpty'

// Responsive SVG bar chart. Data: [{ label, value, valueLabel }].
export function BarChart({ data }) {
  if (!data.length) return <ChartEmpty />

  const bars = barGeometry(data)

  return (
    <div style={wrapStyle}>
      <svg width="100%" height={CHART_HEIGHT + CHART_FOOTER} style={svgStyle}
        role="img" aria-label="Total spend per period">
        {bars.map((bar) => (
          <ChartBar key={bar.id} bar={bar} />
        ))}
      </svg>
    </div>
  )
}
