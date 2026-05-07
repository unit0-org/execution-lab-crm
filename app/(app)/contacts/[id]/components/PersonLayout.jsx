import { layoutStyle } from './PersonLayout.styles'

export function PersonLayout({ left, right }) {
  return (
    <div style={layoutStyle}>
      <div>{left}</div>
      <aside>{right}</aside>
    </div>
  )
}
