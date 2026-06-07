import { space } from '../tokens/space'
import { radius } from '../tokens/radius'

export const labelBadgeStyle = (c) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: space[1],
  padding: `2px ${space[2]}`,
  borderRadius: radius.pill,
  background: c.soft,
  color: c.text,
  fontSize: '11px',
  fontWeight: 700,
  letterSpacing: '0.04em',
  whiteSpace: 'nowrap'
})
