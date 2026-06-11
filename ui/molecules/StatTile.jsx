import { tileStyle, valueStyle, labelStyle } from './StatTile.styles'

// A big stat (value over a mono caption) in a bordered tile.
export function StatTile({ value, label, tone = 'cold' }) {
  return (
    <div style={tileStyle}>
      <div style={valueStyle(tone)}>{value}</div>
      <div style={labelStyle}>{label}</div>
    </div>
  )
}
