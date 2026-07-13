import { space } from '../tokens/space'

export const navGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: space[1]
}

// No `display` here (same trap as navLinkStyle): it's set in globals.css so
// the collapsed-rail rule (.sidebar-collapsed → display:none) can win. An
// inline display would beat the stylesheet and strand the header's chevron
// in the icon rail.
export const navGroupHeaderStyle = {
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: space[3],
  padding: `${space[2]} ${space[3]}`,
  background: 'none',
  border: 'none',
  fontSize: '11px',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.08em'
}

export const chevronStyle = {
  display: 'flex',
  alignItems: 'center',
  transition: 'transform 150ms ease'
}
