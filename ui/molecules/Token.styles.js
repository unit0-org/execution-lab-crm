import { space } from '../tokens/space'
import { radius } from '../tokens/radius'
import { color } from '../tokens/color'

export const tokenStyle = {
  display: 'inline-flex', alignItems: 'center', gap: space[1],
  padding: `2px 2px 2px ${space[2]}`,
  borderRadius: radius.pill,
  background: color.bg.subtle,
  color: color.text.secondary,
  fontSize: '12px', fontWeight: 500, whiteSpace: 'nowrap'
}

export const removeStyle = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  width: '16px', height: '16px', padding: 0,
  border: 'none', borderRadius: radius.pill,
  background: 'transparent', color: color.text.muted,
  cursor: 'pointer', fontSize: '14px', lineHeight: 1
}
