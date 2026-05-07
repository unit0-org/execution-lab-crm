import { skeletonRowStyle, skeletonStackStyle } from './Skeleton.styles'

export function Skeleton({ lines = 4 }) {
  return (
    <div style={skeletonStackStyle}>
      {Array.from({ length: lines }, (_, i) => (
        <div key={i} style={skeletonRowStyle(i)} />
      ))}
    </div>
  )
}
