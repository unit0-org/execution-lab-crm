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

export const asideStyle = {
  flexShrink: 0,
  // Position/z-index live in globals.css ([data-sidebar]) so the mobile
  // media query can flip the sidebar to a fixed drawer — an inline
  // position here would outrank the media query and keep it in flow.
  borderRight: `1px solid ${color.border.default}`,
  background: color.bg.surface
}
