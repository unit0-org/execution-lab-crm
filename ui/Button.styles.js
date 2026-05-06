const base = {
  cursor: 'pointer',
  font: 'inherit',
  textDecoration: 'none',
  display: 'inline-block',
}

const tones = {
  default: { background: 'white', color: '#111', border: '1px solid #d4d4d8' },
  primary: { background: '#111',   color: 'white', border: '1px solid #111' },
  danger:  { background: 'white', color: '#991b1b', border: '1px solid #fecaca' },
}

const sizes = {
  sm: { padding: '0.25rem 0.625rem', borderRadius: 4, fontSize: '0.8rem' },
  md: { padding: '0.4rem 0.875rem', borderRadius: 6, fontSize: '0.875rem' },
  lg: { padding: '0.75rem 1rem', borderRadius: 6, fontSize: '0.95rem' },
}

export const buttonStyle = ({ tone = 'default', size = 'md', block } = {}) => ({
  ...base,
  ...tones[tone],
  ...sizes[size],
  ...(block ? { width: '100%' } : null),
})
