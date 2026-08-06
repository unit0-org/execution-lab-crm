import { space } from '../tokens/space'
import { layer } from '../tokens/layer'

export const toasterStyle = {
  position: 'fixed',
  bottom: space[6],
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: space[2],
  zIndex: layer.toast,
  pointerEvents: 'none'
}
