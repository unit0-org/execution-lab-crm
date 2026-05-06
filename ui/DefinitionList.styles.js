import { space } from './tokens/space'
import { color } from './tokens/color'

export const dlStyle = {
  display: 'grid',
  gridTemplateColumns: 'max-content 1fr',
  columnGap: space[6],
  rowGap: space[3],
}

export const dtStyle = { color: color.text.muted }
export const ddStyle = { margin: 0, color: color.text.primary }
