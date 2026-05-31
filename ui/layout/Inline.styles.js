import { space } from '../tokens/space'

const GAPS = { sm: space[2], md: space[4] }

export const inlineStyle = (gap = 'sm') => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: GAPS[gap]
})
