import { Nav } from './Nav'
import { CollapseToggle } from './CollapseToggle'
import { SidebarFooter } from './SidebarFooter'
import { sidebarStyle } from './Sidebar.styles'

export function Sidebar(props) {
  const { items, currentPath, email, onToggleCollapse } = props

  return (
    <div style={sidebarStyle}>
      <div>
        <CollapseToggle onClick={onToggleCollapse} />
        <Nav items={items} currentPath={currentPath} />
      </div>
      <SidebarFooter email={email} />
    </div>
  )
}
