export const glowDotStyle = (color, size = 7) => ({
  display: 'inline-block',
  width: size,
  height: size,
  borderRadius: '50%',
  background: color,
  boxShadow: `0 0 8px ${color}`,
  flexShrink: 0
})
