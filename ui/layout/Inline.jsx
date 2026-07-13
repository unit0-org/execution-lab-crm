import { inlineStyle } from './Inline.styles'

/**
 * Horizontal flex row (`align` sets `align-items`, default `center`;
 * e.g. `end` to bottom-align mixed-height items).
 */
export function Inline({ gap, nowrap, align, children }) {
  return <div style={inlineStyle(gap, nowrap, align)}>{children}</div>
}
