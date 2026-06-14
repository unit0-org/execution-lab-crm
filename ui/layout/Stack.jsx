import { stackStyle } from './Stack.styles'

export function Stack({ gap = 'md', children }) {
  return <div style={stackStyle(gap)}>{children}</div>
}
