import { space } from '../tokens/space'
import { color } from '../tokens/color'

export const wrapStyle = { width: '100%', overflowX: 'auto' }

export const tableStyle = {
  width: '100%', borderCollapse: 'collapse', fontSize: '14px'
}

const cell = {
  textAlign: 'left', padding: `${space[2]} ${space[3]}`,
  borderBottom: `1px solid ${color.border.soft}`, whiteSpace: 'nowrap'
}

export const thStyle = {
  ...cell, color: color.text.muted, textTransform: 'uppercase'
}
export const tdStyle = cell

export const headerRowStyle = { borderBottom: cell.borderBottom }

export const truncateStyle = {
  display: 'block', maxWidth: '480px', overflow: 'hidden',
  textOverflow: 'ellipsis', whiteSpace: 'nowrap'
}

export const sortButtonStyle = {
  font: 'inherit', color: 'inherit', background: 'none', border: 'none',
  padding: 0, cursor: 'pointer', textTransform: 'uppercase'
}
