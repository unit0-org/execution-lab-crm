import { Nav } from './Nav'
import { CollapseToggle } from './CollapseToggle'
import { SidebarFooter } from './SidebarFooter'
import { sidebarStyle } from './Sidebar.styles'

export function Sidebar(props) {
  const { items, settings, currentPath, email } = props
  const { onToggleCollapse, onNavigate } = props

  return (
    <div style={sidebarStyle}>
      <CollapseToggle onClick={onToggleCollapse} />
      <Nav items={items} currentPath={currentPath} onNavigate={onNavigate} />
      <div>
        <Nav items={settings} currentPath={currentPath}
          onNavigate={onNavigate} />
        <SidebarFooter email={email} />
      </div>
    </div>
  )
}
