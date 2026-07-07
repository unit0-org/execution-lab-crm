import { space } from '../tokens/space'
import { color } from '../tokens/color'
import { radius } from '../tokens/radius'
import { statusColors } from '../tokens/statusColors'

export const fieldStyle = {
  display: 'grid', gap: space[1], fontSize: '13px',
  color: color.text.secondary
}

export const wrapStyle = { position: 'relative', display: 'block' }

export const trailingStyle = {
  position: 'absolute', top: '50%', right: space[2],
  transform: 'translateY(-50%)'
}

const rightPad = (trailing) => (trailing ? '2.5rem' : space[3])
const borderColor = (saved) =>
  saved ? statusColors.successText : color.border.default

export const inputStyle = ({ trailing, saved } = {}) => ({
  width: '100%', font: 'inherit', color: color.text.primary,
  background: color.bg.sunken, borderRadius: radius.md,
  border: `1px solid ${borderColor(saved)}`,
  transition: 'border-color 150ms ease',
  padding: `${space[2]} ${rightPad(trailing)} ${space[2]} ${space[3]}`
})
