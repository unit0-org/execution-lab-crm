import { color } from './tokens/color'

export const spinnerStyle = (size) => ({
  display: 'inline-block',
  width: size,
  height: size,
  border: `2px solid ${color.border.default}`,
  borderTopColor: color.accent.solid,
  borderRadius: '50%',
  animation: 'spin 700ms linear infinite',
})
