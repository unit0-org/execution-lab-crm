import { rowStyle, mainStyle, asideStyle } from './SidebarLayout.styles'

// Form/content + a sticky aside that stacks below it on mobile.
export function SidebarLayout({ main, aside }) {
  return (
    <div style={rowStyle}>
      <div style={mainStyle}>{main}</div>
      <aside style={asideStyle}>{aside}</aside>
    </div>
  )
}
