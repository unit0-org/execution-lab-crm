import { textStyle } from './Text.styles'

export function Text({ tone, size, gutter, children }) {
  return <p style={textStyle({ tone, size, gutter })}>{children}</p>
}
