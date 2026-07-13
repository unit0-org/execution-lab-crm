import { monoLabelStyle } from './MonoLabel.styles'

/**
 * Monospaced micro-label/kicker (JetBrains Mono); `tone` picks a
 * brand/neutral color, `caps` uppercases, `align` blocks + aligns (portal).
 */
export function MonoLabel(props) {
  const { tone = 'muted', size = 11, caps, align, children } = props

  return (
    <span style={monoLabelStyle({ tone, size, caps, align })}>{children}</span>
  )
}
