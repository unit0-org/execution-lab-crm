import { color } from '../tokens/color'

export const checkboxStyle = (disabled) => ({
  width: '16px', height: '16px',
  accentColor: color.accent.solid,
  cursor: disabled ? 'not-allowed' : 'pointer',
  opacity: disabled ? 0.35 : 1
})
