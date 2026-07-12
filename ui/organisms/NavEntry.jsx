import { NavLink } from '../atoms/NavLink'
import { NavGroup } from './NavGroup'

// One sidebar entry: a collapsible group (has items) or a plain link.
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
