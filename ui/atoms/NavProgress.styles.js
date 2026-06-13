export const navProgressStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  height: '2px',
  zIndex: 60,
  overflow: 'hidden',
  pointerEvents: 'none'
}

export const navBarStyle = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  width: '40%',
  background: 'var(--gradient-brand-x)',
  boxShadow: 'var(--glow-blue)',
  animation: 'nav-progress 1.15s ease-in-out infinite'
}
