const base = {
  fontFamily: 'var(--font-geist-sans), system-ui, sans-serif',
  padding: '0 1.5rem',
  lineHeight: 1.5,
  color: '#111',
}

export const pageStyle = (width = 'narrow') => ({
  ...base,
  ...{
    narrow: { maxWidth: 640, margin: '4rem auto' },
    wide: { maxWidth: 960, margin: '3rem auto' },
  }[width],
})
