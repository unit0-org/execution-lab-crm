const tones = {
  default: { color: '#111' },
  muted:   { color: '#666' },
  danger:  { color: '#991b1b' },
}

const sizes = {
  sm: { fontSize: '0.875rem' },
  md: { fontSize: '1rem' },
}

export const textStyle = ({ tone = 'default', size = 'md', gutter } = {}) => ({
  margin: 0,
  marginBottom: { none: 0, sm: '0.5rem', md: '1rem', lg: '2rem' }[gutter] ?? 0,
  ...tones[tone],
  ...sizes[size],
})
