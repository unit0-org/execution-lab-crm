import { space } from './tokens/space'
import { color } from './tokens/color'
import { radius } from './tokens/radius'

export const navListStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  marginTop: space[3],
}

const base = {
  display: 'flex', alignItems: 'center', gap: '10px',
  padding: '7px 10px',
  borderRadius: radius.md,
  textDecoration: 'none',
  fontSize: '13.5px',
  transition: 'background var(--motion-quick) var(--motion-ease), color var(--motion-quick) var(--motion-ease)',
}

const activeStyle = {
  color: color.text.primary,
  background: color.bg.surface,
  boxShadow: `inset 0 0 0 1px ${color.border.default}`,
}

// Inactive nav items get their colour from globals.css so the
// `:hover` rule in CSS can override it without an !important.
export const navItemStyle = (isActive) => (isActive ? { ...base, ...activeStyle } : base)
