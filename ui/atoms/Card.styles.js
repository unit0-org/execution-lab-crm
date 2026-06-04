import { color } from '../tokens/color'
import { space } from '../tokens/space'
import { radius } from '../tokens/radius'
import { toneColor } from '../tokens/tone'

const base = {
  border: `1px solid ${color.border.soft}`,
  borderRadius: radius.lg,
  padding: space[4],
  background: color.bg.surface,
  height: '100%',
  boxSizing: 'border-box',
  minWidth: 0,
  overflowWrap: 'break-word'
}

export const cardStyle = (tone) => ({
  ...base,
  ...(toneColor[tone] ? { borderTop: `3px solid ${toneColor[tone]}` } : {})
})
