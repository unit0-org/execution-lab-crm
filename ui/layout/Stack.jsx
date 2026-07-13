import { stackStyle } from './Stack.styles'

/** Vertical flex stack (`xs`/`sm`/`md`/`lg`). */
export function Stack({ gap = 'md', children }) {
  return <div style={stackStyle(gap)}>{children}</div>
}
