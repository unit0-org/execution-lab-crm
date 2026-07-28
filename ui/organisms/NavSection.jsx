import { NavEntry } from './NavEntry'
import { navSectionStyle } from './NavSection.styles'

/**
 * A block of nav entries set apart from the block above it by space alone
 * — no caption, no toggle. That space is the only grouping the collapsed
 * rail has, where the glyphs carry no words to group them.
 */
export function NavSection({ items, currentPath, onNavigate }) {
  return (
    <div style={navSectionStyle}>
      {items.map((entry) => (
        <NavEntry key={entry.label} entry={entry}
          currentPath={currentPath} onNavigate={onNavigate} />
      ))}
    </div>
  )
}
