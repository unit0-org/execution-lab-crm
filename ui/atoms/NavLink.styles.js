import { space } from '../tokens/space'
import { radius } from '../tokens/radius'

export const navLinkStyle = (collapsed) => ({
  display: 'flex',
  alignItems: 'center',
  gap: space[3],
  justifyContent: collapsed ? 'center' : 'flex-start',
  padding: `${space[2]} ${space[3]}`,
  borderRadius: radius.md,
  textDecoration: 'none',
  fontSize: '13px',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.08em'
})

export const labelStyle = (collapsed) => ({
  display: collapsed ? 'none' : 'inline',
  whiteSpace: 'nowrap'
})
