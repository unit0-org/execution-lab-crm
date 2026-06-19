import { space } from '../tokens/space'
import { color } from '../tokens/color'

const maxWidth = '260px'

export const lineStyle = {
  display: 'flex', alignItems: 'center', gap: space[2], maxWidth
}

export const stackStyle = {
  display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
  gap: space[1], maxWidth
}

export const moreStyle = {
  flexShrink: 0, border: 'none', background: 'none', padding: 0,
  font: 'inherit', fontSize: '12px', color: color.accent.solid,
  cursor: 'pointer', whiteSpace: 'nowrap'
}
