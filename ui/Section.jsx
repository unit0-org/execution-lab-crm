const GUTTERS = { sm: '0.5rem', md: '1rem', lg: '2rem', none: 0 }

export function Section({ gutter = 'lg', children }) {
  return <section style={{ marginBottom: GUTTERS[gutter] }}>{children}</section>
}
