import { space } from './tokens/space'
import { color } from './tokens/color'
import { radius } from './tokens/radius'

const TEMPLATES = {
  'glyph-content-meta':   '1.25rem 1fr auto',
  'content-meta':         '1fr auto',
  'icon-content-meta':    '1.5rem 1fr auto',
  'content-actions':      '1fr auto',
  'three-col':            '1fr auto auto',
}

const variants = {
  divider: ({ divider }) => ({ padding: `${space[2]} 0`, borderBottom: divider ? `1px solid ${color.border.soft}` : 'none' }),
  card: () => ({
    padding: `${space[3]} ${space[4]}`, background: color.bg.surface,
    border: `1px solid ${color.border.default}`, borderRadius: radius.lg,
    transition: 'transform var(--motion-soft) var(--motion-ease), box-shadow var(--motion-soft) var(--motion-ease), border-color var(--motion-quick) var(--motion-ease)',
  }),
}

export const rowStyle = ({ template = 'content-meta', divider = true, align = 'center', variant = 'divider' } = {}) => ({
  display: 'grid', gap: space[3], alignItems: align,
  gridTemplateColumns: TEMPLATES[template],
  ...variants[variant]({ divider }),
})
