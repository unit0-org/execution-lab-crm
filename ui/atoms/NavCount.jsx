import { Badge } from './Badge'
import { navCountStyle } from './NavLink.styles'

// The attention count on a nav entry — nothing when there is none. Sits at
// the end of the label; the collapsed rail pins it over the icon (globals).
export function NavCount({ count }) {
  if (!count) return null

  return (
    <span data-nav-badge style={navCountStyle}>
      <Badge tone="accent">{count}</Badge>
    </span>
  )
}
