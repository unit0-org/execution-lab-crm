import { space } from './tokens/space'
import { color } from './tokens/color'

const TEMPLATES = {
  'glyph-content-meta':   '1.25rem 1fr auto',
  'content-meta':         '1fr auto',
  'icon-content-meta':    '1.5rem 1fr auto',
  'content-actions':      '1fr auto',
  'three-col':            '1fr auto auto',
}

export const rowStyle = ({ template = 'content-meta', divider = true, align = 'center' } = {}) => ({
  display: 'grid',
  gridTemplateColumns: TEMPLATES[template],
  gap: space[3],
  padding: `${space[2]} 0`,
  borderBottom: divider ? `1px solid ${color.border.soft}` : 'none',
  alignItems: align,
})
