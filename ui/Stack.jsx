const GAPS = { sm: '0.5rem', md: '1rem', lg: '2rem' }

export function Stack({ gap = 'md', children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: GAPS[gap] }}>
      {children}
    </div>
  )
}
