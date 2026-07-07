import { color } from '@/ui/tokens/color'
import { fontSize } from '@/ui/tokens/typography'

// Compact, line-break-preserving offer text, clamped to four lines.
export const activeCardTextStyle = {
  margin: 0, whiteSpace: 'pre-wrap',
  fontSize: fontSize.sm, color: color.text.secondary,
  display: '-webkit-box', WebkitLineClamp: 4,
  WebkitBoxOrient: 'vertical', overflow: 'hidden'
}
