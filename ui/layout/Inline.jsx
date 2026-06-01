import { inlineStyle } from './Inline.styles'

export function Inline({ gap, nowrap, children }) {
  return <div style={inlineStyle(gap, nowrap)}>{children}</div>
}
