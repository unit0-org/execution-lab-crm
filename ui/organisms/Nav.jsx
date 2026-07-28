import { NavEntry } from './NavEntry'
import { navStyle } from './Nav.styles'

/**
 * App nav list: renders `items` as entries — each a plain link, a
 * `{label,items}` category group, or a `{section,items}` block —
 * highlighting `currentPath`.
 */
export function Nav({ items, currentPath, onNavigate }) {
  return (
    <nav style={navStyle}>
      {items.map((entry, index) => (
        // Keyed by position: a section block carries no label to key on,
        // and the nav is a fixed list that never reorders.
        <NavEntry key={index} entry={entry}
          currentPath={currentPath} onNavigate={onNavigate} />
      ))}
    </nav>
  )
}
