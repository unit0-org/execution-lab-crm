import { NavEntry } from './NavEntry'
import { navSectionStyle, navSectionLabelStyle } from './NavSection.styles'

/**
 * A titled block of nav entries — a muted caption (e.g. "Workspace") over
 * its links and category groups. The caption only names the block; unlike
 * a category header it is not a toggle, so the entries are always there.
 */
export function NavSection({ label, items, currentPath, onNavigate }) {
  return (
    <div style={navSectionStyle}>
      <div data-nav-section-label style={navSectionLabelStyle}>{label}</div>
      {items.map((entry) => (
        <NavEntry key={entry.label} entry={entry}
          currentPath={currentPath} onNavigate={onNavigate} />
      ))}
    </div>
  )
}
