const base = {
  display: 'inline-block',
  padding: '0.125rem 0.5rem',
  borderRadius: 4,
  fontSize: '0.875rem',
}

const tones = {
  success: { background: '#dcfce7', color: '#166534' },
  error:   { background: '#fee2e2', color: '#991b1b' },
  neutral: { background: '#f3f4f6', color: '#374151' },
}

export const badgeStyle = (tone = 'neutral') => ({ ...base, ...tones[tone] })
