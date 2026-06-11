import { space } from '../tokens/space'

export const rowStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: space[8],
  alignItems: 'flex-start'
}

export const mainStyle = { flex: '2 1 360px', minWidth: 0 }

export const asideStyle = {
  flex: '1 1 280px',
  position: 'sticky',
  top: space[6],
  alignSelf: 'flex-start'
}
