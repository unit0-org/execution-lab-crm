import { space } from '../tokens/space'
import { color } from '../tokens/color'
import { fontSize, fontWeight } from '../tokens/typography'

export const summaryStyle = {
  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  cursor: 'pointer', color: color.text.secondary
}

export const titleStyle = {
  fontSize: fontSize.sm, fontWeight: fontWeight.bold,
  textTransform: 'uppercase', letterSpacing: '0.06em'
}

export const bodyStyle = { marginTop: space[3] }
