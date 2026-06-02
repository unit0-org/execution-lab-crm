import { color } from '../tokens/color'

export const shellStyle = {
  display: 'flex',
  height: '100vh',
  width: '100%',
  overflow: 'hidden'
}

export const mainStyle = {
  flex: 1,
  minWidth: 0,
  height: '100vh',
  overflowY: 'auto'
}

export const asideStyle = (collapsed) => ({
  width: collapsed ? '68px' : '260px',
  flexShrink: 0,
  borderRight: `1px solid ${color.border.default}`,
  background: color.bg.surface,
  transition: 'width var(--motion-soft) var(--motion-ease)'
})
