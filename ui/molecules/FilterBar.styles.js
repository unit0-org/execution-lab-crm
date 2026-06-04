import { space } from '../tokens/space'

// Fixed-height row so toggling a filter never shifts the list below.
export const filterBarStyle = {
  minHeight: '32px',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: space[2]
}
