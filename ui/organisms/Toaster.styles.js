import { space } from '../tokens/space'

export const toasterStyle = {
  position: 'fixed',
  bottom: space[6],
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: space[2],
  zIndex: 50,
  pointerEvents: 'none'
}
