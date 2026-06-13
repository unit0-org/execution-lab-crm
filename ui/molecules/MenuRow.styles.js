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

const clip = {
  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'
}

export const textStyle = {
  flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column'
}

export const labelStyle = { ...clip, textAlign: 'left' }

export const subtitleStyle = {
  ...clip, textAlign: 'left',
  color: color.text.muted, fontSize: fontSize.xs
}
