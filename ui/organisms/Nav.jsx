import { NavEntry } from './NavEntry'
import { navStyle } from './Nav.styles'

export function Nav({ items, currentPath, onNavigate }) {
  return (
    <nav style={navStyle}>
      {items.map((entry) => (
        <NavEntry key={entry.label} entry={entry}
          currentPath={currentPath} onNavigate={onNavigate} />
      ))}
    </nav>
  )
}
