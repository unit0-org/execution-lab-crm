import { space } from '../tokens/space'

const GAPS = { xs: space[1], sm: space[2], md: space[4], lg: space[8] }

export const stackStyle = (gap = 'md') => ({
  display: 'flex',
  flexDirection: 'column',
  gap: GAPS[gap]
})
