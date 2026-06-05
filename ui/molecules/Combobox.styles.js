import { space } from '../tokens/space'
import { color } from '../tokens/color'
import { radius } from '../tokens/radius'

export const wrapStyle = { position: 'relative' }

export const listStyle = {
  position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 30,
  marginTop: space[1], maxHeight: '200px', overflowY: 'auto',
  display: 'flex', flexDirection: 'column',
  background: color.bg.surface, borderRadius: radius.md,
  border: `1px solid ${color.border.default}`,
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)'
}

export const itemStyle = {
  textAlign: 'left', padding: `${space[2]} ${space[3]}`,
  background: 'transparent', border: 'none', cursor: 'pointer',
  font: 'inherit', color: color.text.primary
}
