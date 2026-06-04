import { barRectStyle, barLabelStyle } from './BarChart.styles'

// One chart bar: a rounded rect with a hover title and its x-axis label.
export function ChartBar({ bar }) {
  return (
    <g>
      <title>{bar.title}</title>
      <rect x={bar.x} y={bar.y} width={bar.width} height={bar.height}
        rx="3" style={barRectStyle} />
      <text x={bar.cx} y={bar.labelY} textAnchor="middle"
        style={barLabelStyle}>{bar.label}</text>
    </g>
  )
}
