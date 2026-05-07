import { space } from '@/ui/tokens/space'
import { color } from '@/ui/tokens/color'
import { radius } from '@/ui/tokens/radius'
import { fontSize } from '@/ui/tokens/typography'

const base = {
  display: 'block',
  padding: `${space[2]} ${space[3]}`,
  borderRadius: radius.md,
  color: color.text.secondary,
  textDecoration: 'none',
  fontSize: fontSize.sm,
}

const active = {
  background: color.bg.subtle,
  color: color.text.primary,
}

export const navLinkStyle = (isActive) => ({ ...base, ...(isActive ? active : null) })
