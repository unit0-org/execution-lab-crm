import { glowDotStyle } from './GlowDot.styles'

// A small status dot with a neon glow halo (design system).
export function GlowDot({ color, size = 7 }) {
  return <span style={glowDotStyle(color, size)} />
}
