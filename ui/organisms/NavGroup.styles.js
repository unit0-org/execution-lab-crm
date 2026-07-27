import { space } from '../tokens/space'
import { navLinkStyle } from '../atoms/NavLink.styles'

export const navGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: space[1]
}

// A category header is a nav row like any other, so it borrows the link's
// style and only undoes what being a <button> brings with it. No `display`
// here (same trap as navLinkStyle): it's set in globals.css so the
// collapsed-rail rule (.sidebar-collapsed → display:none) can win. An
// inline display would beat the stylesheet and strand the header's chevron
// in the icon rail.
export const navGroupHeaderStyle = {
  ...navLinkStyle,
  width: '100%',
  background: 'none',
  border: 'none',
  fontFamily: 'inherit',
  cursor: 'pointer'
}

export const chevronStyle = {
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto',
  transition: 'transform 150ms ease'
}

// Children are text-only, so indent them past where the glyph would be
// (row padding + icon + its gap) to line up under the category's label.
export const navChildrenStyle = {
  flexDirection: 'column',
  gap: space[1],
  paddingLeft: `calc(${space[3]} + 18px + ${space[3]})`
}
