// Literal styles for the Open Graph card. The OG image is rendered by
// Satori (next/og), which doesn't resolve CSS variables — so the brand
// hex values are inlined here rather than pulled from the design tokens.
const frame = {
  width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', padding: '72px 80px',
  background: '#1d2a33', color: '#ffffff', fontFamily: 'sans-serif'
}

const kicker = {
  color: '#5effb7', fontSize: 30, fontWeight: 700,
  letterSpacing: 4, marginBottom: 18
}

const title = { fontSize: 112, fontWeight: 800, lineHeight: 1 }

const meta = { marginTop: 32, fontSize: 30, color: 'rgba(255,255,255,0.66)' }

export const ogStyles = { frame, kicker, title, meta }
