import { space } from './tokens/space'
import { color } from './tokens/color'
import { radius } from './tokens/radius'

const base = {
  borderRadius: radius.lg,
  border: `1px solid ${color.border.default}`,
  background: color.bg.surface,
  padding: space[5],
  display: 'flex',
  flexDirection: 'column',
  gap: space[2],
}

const tones = {
  default: {},
  paper:   { background: color.bg.surface, border: `1px solid ${color.border.default}` },
  lift:    { transition: 'transform var(--motion-soft) var(--motion-ease), box-shadow var(--motion-soft) var(--motion-ease), border-color var(--motion-quick) var(--motion-ease)', cursor: 'pointer' },
}

const sizes = {
  sm: { padding: space[3] },
  md: { padding: space[4] },
  lg: { padding: `${space[4]} ${space[5]}` },
}

export const cardStyle = ({ tone = 'default', size = 'md' } = {}) => ({
  ...base, ...tones[tone], ...sizes[size],
})
