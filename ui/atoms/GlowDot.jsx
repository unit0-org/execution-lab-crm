import { glowDotStyle } from './GlowDot.styles'

/** Small status dot with a neon glow halo (portal). */
export function GlowDot({ color, size = 7 }) {
  return <span style={glowDotStyle(color, size)} />
}
