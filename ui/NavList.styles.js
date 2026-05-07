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
  display: 'block',
  padding: `${space[2]} ${space[3]}`,
  borderRadius: radius.md,
  color: active ? color.text.primary : color.text.secondary,
  background: active ? color.bg.subtle : 'transparent',
  textDecoration: 'none',
  fontSize: fontSize.sm,
})
