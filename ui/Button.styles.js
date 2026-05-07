import { space } from './tokens/space'
import { color } from './tokens/color'
import { radius } from './tokens/radius'
import { fontSize, fontWeight } from './tokens/typography'

const base = {
  cursor: 'pointer', font: 'inherit', fontWeight: fontWeight.medium,
  textDecoration: 'none', display: 'inline-block',
  transition: 'background var(--motion-quick) var(--motion-ease), border-color var(--motion-quick) var(--motion-ease), color var(--motion-quick) var(--motion-ease)',
}

const tones = {
  default: { background: color.bg.surface,    color: color.text.secondary,    border: `1px solid ${color.border.default}` },
  primary: { background: color.text.primary,  color: color.bg.canvas,         border: `1px solid ${color.text.primary}` },
  accent:  { background: color.accent.solid,  color: color.accent.text,       border: `1px solid ${color.accent.solid}` },
  ghost:   { background: 'transparent',       color: color.text.muted,        border: '1px solid transparent' },
  danger:  { background: color.bg.surface,    color: color.status.errorText,  border: `1px solid ${color.border.default}` },
}

const sizes = {
  sm: { padding: `${space[1]} ${space[3]}`, borderRadius: radius.sm, fontSize: fontSize.sm },
  md: { padding: `${space[2]} ${space[4]}`, borderRadius: radius.md, fontSize: fontSize.sm },
  lg: { padding: `${space[3]} ${space[4]}`, borderRadius: radius.md, fontSize: fontSize.md },
}

export const buttonStyle = ({ tone = 'default', size = 'md', block } = {}) => ({
  ...base, ...tones[tone], ...sizes[size], ...(block ? { width: '100%' } : null),
})
