import { space } from './tokens/space'

export const twoColumnStyle = {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr) 320px',
  gap: space[8],
  alignItems: 'start',
}
