import { skeletonStyle } from './Skeleton.styles'

export function Skeleton({ height }) {
  return <div style={skeletonStyle(height)} />
}
