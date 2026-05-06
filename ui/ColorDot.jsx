// Solid color circle — used inside Chip and color pickers.
const SIZES = { sm: 8, md: 10, lg: 14 }

export function ColorDot({ color, size = 'md' }) {
  const px = SIZES[size]
  return (
    <span style={{
      display: 'inline-block',
      width: px,
      height: px,
      borderRadius: '50%',
      background: color,
      flexShrink: 0,
    }} />
  )
}
