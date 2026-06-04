import { space } from '../tokens/space'

const ALIGN = { center: 'center', end: 'flex-end', start: 'flex-start' }

// `end` aligns trailing controls to the field's input (its bottom edge)
// rather than the centre of a label + input pair.
export const rowStyle = (align = 'center') => ({
  display: 'flex',
  alignItems: ALIGN[align] || 'center',
  gap: space[2]
})

export const growStyle = { flex: 1, minWidth: 0 }
