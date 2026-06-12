import { space } from '../tokens/space'
import { color } from '../tokens/color'
import { radius } from '../tokens/radius'

export const sidebarStyle = {
  position: 'relative', display: 'flex', flexDirection: 'column',
  justifyContent: 'space-between', height: '100%'
}

export const toggleStyle = {
  position: 'absolute', top: space[5], left: 'calc(100% - 14px)',
  zIndex: 5, display: 'flex', alignItems: 'center', gap: space[2]
}

export const tipStyle = {
  padding: `${space[1]} ${space[2]}`, background: color.text.primary,
  color: color.bg.surface, borderRadius: radius.sm, fontSize: '11px',
  fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em',
  whiteSpace: 'nowrap'
}

export const footerStyle = {
  padding: space[4], borderTop: `1px solid ${color.border.default}`
}
