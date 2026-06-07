import { Nav } from './Nav'
import { CollapseToggle } from './CollapseToggle'
import { ThemeToggle } from './ThemeToggle'
import { SidebarFooter } from './SidebarFooter'
import { sidebarStyle } from './Sidebar.styles'

export function Sidebar(props) {
  const { items, settings, currentPath, email } = props
  const { onToggleCollapse, onToggleTheme } = props

  return (
    <div style={sidebarStyle}>
      <div>
        <CollapseToggle onClick={onToggleCollapse} />
        <Nav items={items} currentPath={currentPath} />
      </div>
      <div>
        <Nav items={settings} currentPath={currentPath} />
        <ThemeToggle onClick={onToggleTheme} />
        <SidebarFooter email={email} />
      </div>
    </div>
  )
}
