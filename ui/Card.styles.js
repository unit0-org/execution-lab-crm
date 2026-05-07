import { space } from './tokens/space'
import { color } from './tokens/color'
import { radius } from './tokens/radius'

const base = {
  borderRadius: radius.md,
  border: `1px solid ${color.border.default}`,
  background: color.bg.surface,
  padding: space[4],
  display: 'flex',
  flexDirection: 'column',
  gap: space[2],
}

const tones = {
  default: {},
  paper:   { background: color.bg.surface, border: `1px solid ${color.border.default}` },
}

const sizes = {
  sm: { padding: space[3] },
  md: { padding: space[4] },
  lg: { padding: `${space[4]} ${space[5]}` },
}

export const cardStyle = ({ tone = 'default', size = 'md' } = {}) => ({
  ...base, ...tones[tone], ...sizes[size],
})
