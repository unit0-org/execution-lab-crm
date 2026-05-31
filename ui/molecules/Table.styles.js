import { space } from '../tokens/space'
import { color } from '../tokens/color'

export const wrapStyle = { width: '100%', overflowX: 'auto' }

export const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  fontSize: '14px'
}

const cell = {
  textAlign: 'left',
  padding: `${space[2]} ${space[3]}`,
  borderBottom: `1px solid ${color.border.soft}`,
  whiteSpace: 'nowrap'
}

export const thStyle = { ...cell, color: color.text.muted }
export const tdStyle = cell
