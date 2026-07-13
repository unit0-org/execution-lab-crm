import { Nav } from './Nav'
import { CollapseToggle } from './CollapseToggle'
import { SidebarFooter } from './SidebarFooter'
import { sidebarStyle } from './Sidebar.styles'

/**
 * The app nav rail: `items` + `settings` navs over a user footer, with a
 * toggle that collapses it to icons. `signOutNext` = post-logout landing.
 */
export function Sidebar(props) {
  const { items, settings, currentPath, email } = props
  const { onToggleCollapse, onNavigate, signOutNext } = props

  return (
    <div style={sidebarStyle}>
      <CollapseToggle onClick={onToggleCollapse} />
      <Nav items={items} currentPath={currentPath} onNavigate={onNavigate} />
      <div>
        <Nav items={settings} currentPath={currentPath}
          onNavigate={onNavigate} />
        <SidebarFooter email={email} signOutNext={signOutNext} />
      </div>
    </div>
  )
}
