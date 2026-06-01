import { space } from '../tokens/space'
import { color } from '../tokens/color'
import { radius } from '../tokens/radius'

export const fieldStyle = {
  display: 'grid', gap: space[1], fontSize: '13px',
  color: color.text.secondary
}

export const wrapStyle = { position: 'relative', display: 'block' }

export const trailingStyle = {
  position: 'absolute', top: '50%', right: space[1],
  transform: 'translateY(-50%)'
}

const rightPad = (trailing) => (trailing ? '2.5rem' : space[3])

export const inputStyle = ({ trailing } = {}) => ({
  width: '100%', font: 'inherit', color: color.text.primary,
  background: color.bg.sunken, borderRadius: radius.md,
  border: `1px solid ${color.border.default}`,
  padding: `${space[2]} ${rightPad(trailing)} ${space[2]} ${space[3]}`
})
