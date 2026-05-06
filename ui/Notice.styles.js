const base = {
  padding: '0.5rem 0.75rem',
  borderRadius: 6,
  fontSize: '0.875rem',
  marginBottom: '1rem',
}

const tones = {
  success: { background: '#dcfce7', color: '#166534' },
  error:   { background: '#fee2e2', color: '#991b1b' },
}

export const noticeStyle = (tone = 'success') => ({ ...base, ...tones[tone] })
