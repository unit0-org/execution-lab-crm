import { Nav } from './Nav'
import { CollapseToggle } from './CollapseToggle'
import { SidebarFooter } from './SidebarFooter'
import { sidebarStyle } from './Sidebar.styles'

export function Sidebar(props) {
  const { items, currentPath, email, collapsed, onToggleCollapse } = props

  return (
    <div style={sidebarStyle}>
      <div>
        <CollapseToggle collapsed={collapsed} onClick={onToggleCollapse} />
        <Nav items={items} currentPath={currentPath} collapsed={collapsed} />
      </div>
      <SidebarFooter email={email} collapsed={collapsed} />
    </div>
  )
}
