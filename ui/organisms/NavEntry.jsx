import { NavLink } from '../atoms/NavLink'
import { NavGroup } from './NavGroup'

/**
 * One nav entry: a `{label,items}` category group when it has `items`,
 * otherwise a plain link, active when it matches `currentPath`.
 */
export function NavEntry({ entry, currentPath, onNavigate }) {
  if (entry.items)
    return (
      <NavGroup label={entry.label} items={entry.items}
        currentPath={currentPath} onNavigate={onNavigate} />
    )

  return (
    <NavLink href={entry.href} icon={entry.icon}
      active={currentPath === entry.href} onNavigate={onNavigate}>
      {entry.label}
    </NavLink>
  )
}
