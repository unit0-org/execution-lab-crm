import { space } from '../tokens/space'
import { color } from '../tokens/color'
import { fontSize, fontWeight } from '../tokens/typography'

export const summaryStyle = { cursor: 'pointer' }

export const rowStyle = {
  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  color: color.text.secondary
}

export const titleStyle = {
  fontSize: fontSize.sm, fontWeight: fontWeight.bold,
  textTransform: 'uppercase', letterSpacing: '0.06em'
}

export const actionsStyle = {
  display: 'flex', alignItems: 'center', gap: space[2]
}

export const previewStyle = { marginTop: space[2] }

export const bodyStyle = { marginTop: space[3] }
