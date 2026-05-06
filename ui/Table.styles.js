export const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  fontSize: '0.9rem',
}

const cellBase = { padding: '0.5rem 0.75rem' }

const tones = {
  default: { color: '#111' },
  muted:   { color: '#666' },
}

export const cellStyle = ({ align = 'left', tone = 'default' } = {}) => ({
  ...cellBase,
  borderBottom: '1px solid #f3f4f6',
  textAlign: align,
  ...tones[tone],
})

export const headerStyle = ({ align = 'left' } = {}) => ({
  ...cellBase,
  textAlign: align,
  borderBottom: '1px solid #e5e7eb',
  fontWeight: 600,
  fontSize: '0.8rem',
  color: '#666',
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
})
