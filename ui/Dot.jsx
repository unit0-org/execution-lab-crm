// Tiny round indicator. Used for warmth dots, status pips.
const SIZES = { sm: 6, md: 8, lg: 10 }

const baseStyle = (size, filled, color) => ({
  display: 'inline-block',
  width: SIZES[size],
  height: SIZES[size],
  borderRadius: '50%',
  background: filled ? color : 'transparent',
  border: filled ? 'none' : `1px solid ${color}`,
})

export function Dot({ size = 'md', filled = true, color = 'var(--color-accent)' }) {
  return <span style={baseStyle(size, filled, color)} aria-hidden />
}
