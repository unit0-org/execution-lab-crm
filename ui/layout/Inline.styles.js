import { space } from '../tokens/space'

const GAPS = { xs: space[1], sm: space[2], md: space[4], lg: space[8] }

export const inlineStyle = (gap = 'sm', nowrap) => ({
  display: 'flex',
  flexWrap: nowrap ? 'nowrap' : 'wrap',
  alignItems: 'center',
  gap: GAPS[gap]
})
