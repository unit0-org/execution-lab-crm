import { skeletonStyle } from './Skeleton.styles'

/** Loading placeholder sized to final content. */
export function Skeleton({ height }) {
  return <div style={skeletonStyle(height)} />
}
