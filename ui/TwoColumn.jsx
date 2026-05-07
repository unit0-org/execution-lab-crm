import { twoColumnStyle } from './TwoColumn.styles'

// Main + sidebar layout used on the person detail page.
export function TwoColumn({ left, right }) {
  return (
    <div style={twoColumnStyle}>
      <div>{left}</div>
      <aside>{right}</aside>
    </div>
  )
}
