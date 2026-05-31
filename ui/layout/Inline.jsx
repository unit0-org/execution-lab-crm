import { inlineStyle } from './Inline.styles'

export function Inline({ gap, children }) {
  return <div style={inlineStyle(gap)}>{children}</div>
}
