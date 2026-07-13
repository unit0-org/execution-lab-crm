import { NavEntry } from './NavEntry'
import { navStyle } from './Nav.styles'

/**
 * App nav list: renders `items` as entries — each a plain link or a
 * `{label,items}` category group — highlighting `currentPath`.
 */
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
