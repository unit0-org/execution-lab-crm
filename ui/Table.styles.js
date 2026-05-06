import { space } from './tokens/space'
import { color } from './tokens/color'
import { fontSize, fontWeight } from './tokens/typography'

export const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  fontSize: fontSize.sm,
}

const cellBase = { padding: `${space[3]} ${space[3]}` }
const tones = { default: { color: color.text.primary }, muted: { color: color.text.muted } }

export const cellStyle = ({ align = 'left', tone = 'default' } = {}) => ({
  ...cellBase,
  borderBottom: `1px solid ${color.border.default}`,
  textAlign: align,
  ...tones[tone],
})

export const headerStyle = ({ align = 'left' } = {}) => ({
  ...cellBase,
  textAlign: align,
  borderBottom: `1px solid ${color.border.strong}`,
  fontWeight: fontWeight.semibold,
  fontSize: fontSize.xs,
  color: color.text.muted,
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
})
