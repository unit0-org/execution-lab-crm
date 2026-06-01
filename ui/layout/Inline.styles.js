import { space } from '../tokens/space'

const GAPS = { sm: space[2], md: space[4] }

export const inlineStyle = (gap = 'sm', nowrap) => ({
  display: 'flex',
  flexWrap: nowrap ? 'nowrap' : 'wrap',
  alignItems: 'center',
  gap: GAPS[gap]
})
