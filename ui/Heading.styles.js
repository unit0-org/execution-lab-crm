const sizes = {
  1: { fontSize: '1.5rem' },
  2: { fontSize: '1.05rem', color: '#333' },
  3: { fontSize: '0.95rem', color: '#333' },
}

export const headingStyle = (level = 1, gutter = 'md') => ({
  margin: 0,
  marginBottom: { none: 0, sm: '0.5rem', md: '0.75rem', lg: '2rem' }[gutter],
  ...sizes[level],
})
