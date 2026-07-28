import { NavLink } from '../atoms/NavLink'
import { NavGroup } from './NavGroup'
import { NavSection } from './NavSection'

/**
 * One nav entry: a `{section,items}` block when it is a `section`, a
 * `{label,items}` category group when it has `items`, otherwise a plain
 * link, active when it matches `currentPath`.
 */
export function NavEntry({ entry, currentPath, onNavigate }) {
  if (entry.section)
    return (
      <NavSection items={entry.items} currentPath={currentPath}
        onNavigate={onNavigate} />
    )

  if (entry.items)
    return (
      <NavGroup label={entry.label} icon={entry.icon} items={entry.items}
        currentPath={currentPath} onNavigate={onNavigate} />
    )

  return (
    <NavLink href={entry.href} icon={entry.icon} badge={entry.badge}
      active={currentPath === entry.href} onNavigate={onNavigate}>
      {entry.label}
    </NavLink>
  )
}
