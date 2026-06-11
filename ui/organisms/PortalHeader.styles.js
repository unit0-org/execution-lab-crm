import { color } from '../tokens/color'
import { space } from '../tokens/space'

export const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: space[4],
  flexWrap: 'wrap',
  padding: `0 0 ${space[5]}`,
  borderBottom: `1px solid ${color.border.default}`,
  marginBottom: space[6]
}

export const rightStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '4px',
  textAlign: 'right'
}
