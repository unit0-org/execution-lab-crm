import { space } from './tokens/space'
import { color } from './tokens/color'
import { radius } from './tokens/radius'
import { fontSize } from './tokens/typography'

export const navListStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  marginTop: space[3],
}

export const navItemStyle = (active) => ({
  display: 'flex', alignItems: 'center', gap: '10px',
  padding: '7px 10px',
  borderRadius: radius.md,
  color: active ? color.text.primary : color.text.secondary,
  background: active ? color.bg.surface : 'transparent',
  boxShadow: active ? `inset 0 0 0 1px ${color.border.default}` : 'none',
  textDecoration: 'none',
  fontSize: '13.5px',
  transition: 'background var(--motion-quick) var(--motion-ease), color var(--motion-quick) var(--motion-ease)',
})
