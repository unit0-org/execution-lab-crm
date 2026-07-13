import { rowStyle, mainStyle, asideStyle } from './SidebarLayout.styles'

/** Content + a sticky aside that stacks below on mobile (portal forms). */
export function SidebarLayout({ main, aside }) {
  return (
    <div style={rowStyle}>
      <div style={mainStyle}>{main}</div>
      <aside style={asideStyle}>{aside}</aside>
    </div>
  )
}
