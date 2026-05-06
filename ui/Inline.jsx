const GAPS = { sm: '0.5rem', md: '1rem', lg: '1.5rem' }

export function Inline({ gap = 'md', align = 'center', justify = 'start', children }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: align,
      justifyContent: justify,
      gap: GAPS[gap],
    }}>
      {children}
    </div>
  )
}
