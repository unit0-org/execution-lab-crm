import { color } from '../tokens/color'
import { radius } from '../tokens/radius'

export const skeletonStyle = (height = 16) => ({
  width: '100%',
  height,
  background: color.bg.subtle,
  borderRadius: radius.sm
})
