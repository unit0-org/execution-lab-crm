import { space } from './tokens/space'
import { radius } from './tokens/radius'
import { fontSize, fontWeight } from './tokens/typography'

export const chipStyle = (color) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: space[2],
  padding: `${space[1]} ${space[3]}`,
  borderRadius: radius.pill,
  fontSize: fontSize.xs,
  fontWeight: fontWeight.medium,
  background: 'var(--color-bg-subtle)',
  color: 'var(--color-text-primary)',
  border: `1px solid ${color}33`, // 33 = ~20% alpha
})
