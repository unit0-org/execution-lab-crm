import { color } from '../tokens/color'

export const swatchStyle = (active) => ({
  display: 'inline-flex',
  padding: '2px',
  background: 'none',
  borderRadius: '50%',
  cursor: 'pointer',
  border: `2px solid ${active ? color.border.strong : 'transparent'}`
})
