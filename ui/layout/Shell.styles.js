import { color } from '../tokens/color'

export const shellStyle = {
  display: 'flex',
  minHeight: '100vh',
  width: '100%'
}

export const mainStyle = { flex: 1, minWidth: 0 }

export const asideStyle = {
  width: '260px',
  flexShrink: 0,
  borderLeft: `1px solid ${color.border.default}`,
  background: color.bg.surface
}
