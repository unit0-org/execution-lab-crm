import { inlineStyle } from './Inline.styles'

export function Inline({ gap, nowrap, align, children }) {
  return <div style={inlineStyle(gap, nowrap, align)}>{children}</div>
}
