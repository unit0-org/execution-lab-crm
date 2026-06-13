import { color } from '../tokens/color'
import { radius } from '../tokens/radius'
import { space } from '../tokens/space'
import { fontSize } from '../tokens/typography'

export const rowStyle = {
  display: 'flex', alignItems: 'center', gap: space[3],
  width: '100%', padding: space[2],
  background: 'transparent', border: 'none', cursor: 'pointer',
  borderRadius: radius.md, color: color.text.primary,
  fontSize: fontSize.sm
}

export const labelStyle = {
  flex: 1, minWidth: 0, textAlign: 'left',
  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'
}
