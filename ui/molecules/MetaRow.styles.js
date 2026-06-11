import { color } from '../tokens/color'
import { space } from '../tokens/space'
import { font, fontWeight } from '../tokens/typography'

export const rowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: space[3],
  padding: `${space[2]} 0`,
  borderBottom: `1px solid ${color.border.default}`
}

export const valueStyle = {
  fontFamily: font.sans,
  fontSize: '13px',
  fontWeight: fontWeight.semibold,
  color: color.text.primary
}
