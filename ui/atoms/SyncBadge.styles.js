import { space } from '../tokens/space'
import { radius } from '../tokens/radius'
import { color } from '../tokens/color'
import { fontSize, fontWeight } from '../tokens/typography'

// A soft, understated pill marking a contact as synced with Google.
export const syncBadgeStyle = {
  display: 'inline-block',
  padding: `2px ${space[2]}`,
  borderRadius: radius.pill,
  background: color.bg.subtle,
  color: color.text.secondary,
  border: `1px solid ${color.border.soft}`,
  fontSize: fontSize.xs,
  fontWeight: fontWeight.semibold,
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  whiteSpace: 'nowrap',
  textDecoration: 'none'
}
