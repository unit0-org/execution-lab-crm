import { monoLabelStyle } from './MonoLabel.styles'

// Monospaced micro-label (JetBrains Mono) for technical/data text and
// kickers. Tone picks a brand or neutral color; `caps` uppercases it.
export function MonoLabel(props) {
  const { tone = 'muted', size = 11, caps, align, children } = props

  return (
    <span style={monoLabelStyle({ tone, size, caps, align })}>{children}</span>
  )
}
